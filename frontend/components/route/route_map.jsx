import React from 'react';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waypoints: null,
      route: null,
      elevation: 0,
      distance: null,
      title: "",
      userId: this.props.userId,
      description: "",
      sport: "Cycling"
    };
    this.polyLine = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.path = this.polyLine.getPath();
    this.routeLine = "";
    this.createRequest = this.createRequest.bind(this);
    this.resetRoute = this.resetRoute.bind(this);
    this.initMap = this.initMap.bind(this);
    this.saveRoute = this.saveRoute.bind(this);
    this.calcElevation = this.calcElevation.bind(this);
    this.requestElevation = this.requestElevation.bind(this);
    this.commitRoute = this.commitRoute.bind(this);
  }

  initMap() {
    let mapOptions = {
      center: { lat: 38.25, lng: -85.75 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.markers = [];
  }

  createRequest(mode) {
    let request = {};
    if (this.state.waypoints.length > 1) {
      
      let start = { lat: this.state.waypoints[0].lat(), lng: this.state.waypoints[0].lng() };
      let end = { lat: this.state.waypoints[this.state.waypoints.length - 1].lat(), lng: this.state.waypoints[this.state.waypoints.length - 1].lng() };
      let points = this.state.waypoints.slice(1, this.state.waypoints.length - 1);
      let waypoints = [];
      points.forEach(point => (waypoints.push({ location: { lat: point.lat(), lng: point.lng() }})));
      request = { origin: start, destination: end, waypoints: waypoints, travelMode: mode };
    }
    return request;
  }

  saveRoute(sport = "Cycling") {
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();
    
    directionsDisplay.setMap(this.map);
    let mode;
    sport === "Cycling" ? mode = 'BICYCLING' : mode = 'WALKING';
    let request = this.createRequest(mode);
    let id = this.props.userId;
    let requestElevation = this.requestElevation.bind(this);

    const directionCB = (response, status) => {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
        let routeLine = response.routes[0].overview_polyline;
        requestElevation(google.maps.geometry.encoding.decodePath(routeLine));
        let dist = google.maps.geometry.spherical.computeLength(google.maps.geometry.encoding.decodePath(routeLine));
        this.setState({ userId: id, route: routeLine, distance: dist });
      }
    };

    if (request.waypoints) {
      directionsService.route(request, directionCB);
    }
  }


  requestElevation (path) {
    let elevationService = new google.maps.ElevationService();
    let calcElevation = this.calcElevation;
    elevationService.getElevationAlongPath({
      'path': path,
      'samples': path.length
    }, elevations => calcElevation(elevations));
  }

  calcElevation(elevations) {
    let totalGain = 0;
    //if change between points is > 0.25m add to total gain
    //filters out some noise
    for (let i = 0; i < elevations.length - 1; i++) {
      if ((elevations[i + 1].elevation - elevations[i].elevation) > 0.25) {
        totalGain = totalGain + (elevations[i + 1].elevation - elevations[i].elevation);
      }
    }
    this.setState({elevation: totalGain});
  }

  resetRoute() {
    this.initMap();
    this.polyLine = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.path = this.polyLine.getPath();
    this.listenClicks();
    this.setState({
      waypoints: null,
      title: "",
      description: "",
      distance: 0,
      elevation: 0,
      route: null,
      sport: "Cycling"
    });
  }

  listenClicks() {
    let thatMap = this.map;
    this.polyLine.setMap(this.map);
    let thatPath = this.path;
    
    const addLatLng = (event) => {
      //add the point to the path
      thatPath.push(event.latLng);
      
      var marker = new google.maps.Marker({
        position: event.latLng,
        map: thatMap
      });
      this.markers.push(marker);
      //set the state to the waypoints array from the create path
      this.setState({ waypoints: thatPath["j"] });
      //push the state to the parent builder component
      // this.props.sendData(this.state);
    };

    this.map.addListener('click', addLatLng);
    this.map.addListener('click', this.saveRoute);
    
  }

  componentDidMount() {
    this.initMap();
    this.listenClicks();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  commitRoute(e) {
    e.preventDefault();
    let route = {
      user_id: parseInt(this.state.userId),
      route: this.state.route,
      distance: this.state.distance,
      elevation: this.state.elevation,
      title: this.state.title,
      description: this.state.description,
      sport: this.state.sport
    };
    this.props.createRoute(route);
    // this.props.history.push("/routes/");
  }

  componentDidUpdate(prevProps) {
    if (this.props.routes !== prevProps.routes) {
      let next = Object.keys(this.props.routes)[Object.keys(this.props.routes).length - 1];
      this.props.history.push(`/routes/${parseInt(next)}`);
    }
  }

  render() {
    let errors = "errors var";
    if (this.props.errors !== undefined) {
      errors = this.props.errors.map(error => (<li key={error}>{error}</li>));
    }
    return (<div>
      <div className='map-container' id='map-container' ref={map => this.mapNode = map}>
      </div>
      <label>Route Name
        <input id="route-name" value={this.state.title} onChange={this.update("title")} type="text" required></input>
      </label>
      <label>
        Choose a sport:
        <select onChange={this.update("sport")} value={this.state.sport}>
          <option value="Cycling">Cycling</option>
          <option value="Running">Running</option>
        </select>
      </label>
      <label>Description
        <input value={this.state.description} onChange={this.update("description")} type="text"></input>
      </label><br />
      <p><button className="button" onClick={this.resetRoute}>Reset Route</button></p>
      <p><button onClick={this.commitRoute} className="button">Save Route</button></p>
      <div>{errors}</div>
    </div>
    )
  }

}

export default RouteMap;

