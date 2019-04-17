import React from 'react';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waypoints: null
    };
    this.polyLine = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.path = this.polyLine.getPath();
    this.createRequest = this.createRequest.bind(this);
    this.createRoute = this.createRoute.bind(this);
    this.resetRoute = this.resetRoute.bind(this);
    this.initMap = this.initMap.bind(this);
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
    let start = null;
    let end = null;
    if (this.state.waypoints) {
      start = { lat: this.state.waypoints[0].lat(), lng: this.state.waypoints[0].lng() };
      end = { lat: this.state.waypoints[this.state.waypoints.length - 1].lat(), lng: this.state.waypoints[this.state.waypoints.length - 1].lng() };

      request = { origin: start, destination: end, travelMode: mode };
    }
    return request;
  }

  createRoute(sport) {
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();
    let mode;
    sport === "Cycling" ? mode = 'BICYCLING' : mode = 'WALKING';
    let request = this.createRequest(mode);

    directionsService.route(request, function (response, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      }
    });
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
      this.props.sendData(this.state);
    };

    this.map.addListener('click', addLatLng);
    
  }

  componentDidMount() {
    this.initMap();
    this.listenClicks();
  }

  render() {
    return (<div>
      <div className='map-container' id='map-container' ref={map => this.mapNode = map}>
      </div>
      <p><button className="button" onClick={() => (this.createRoute("Cycling"))}>Create Route</button></p>
      <p><button className="button" onClick={this.resetRoute}>Reset Route</button></p>
    </div>
    )
  }

}

export default RouteMap;