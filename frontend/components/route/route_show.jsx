import React from 'react';

class RouteShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { route: this.props.route };
    this.initMap = this.initMap.bind(this);
    this.drawRoute = this.drawRoute.bind(this);
    this.createRequest = this.createRequest.bind(this);
  }

  initMap() {
    let mapOptions = {
      center: { lat: 38.25, lng: -85.75 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  createRequest(waypoints, mode) {
    let request = {};
    if (this.props.route) {

      let start = { lat: waypoints[0].lat(), lng: waypoints[0].lng() };
      let end = { lat: waypoints[waypoints.length - 1].lat(), lng: waypoints[waypoints.length - 1].lng() };
      let points = waypoints.slice(1, waypoints.length - 1);
      let middlePoints = [];
      points.forEach(point => (middlePoints.push({ location: { lat: point.lat(), lng: point.lng() } })));
      while (middlePoints.length > 22) {
        middlePoints = middlePoints.filter((x, idx) => (idx % 2 === 0));
      }
      request = { origin: start, destination: end, waypoints: middlePoints, travelMode: mode };
    }
    return request;
  }

  drawRoute(route){
    let waypoints = google.maps.geometry.encoding.decodePath(route);
    this.waypoints = waypoints;

    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(this.map);
    let mode;
    route.sport === "Cycling" ? mode = 'BICYCLING' : mode = 'WALKING';
    let request = this.createRequest(waypoints, mode);

    const drawCB = (response, status) => {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      }
    };

    directionsService.route(request, drawCB);
  }

  componentDidMount() {
    this.props.getRoute(parseInt(this.props.match.params.routeId));
    this.initMap();
  }

  render() {
    let routeTitle = "";
    if (this.props.route) {
      routeTitle = this.props.route.title;
      this.drawRoute(this.props.route.route);
    }

    return (<div className="route-show">
              <h1>{routeTitle}</h1>
                <div className='map-show-container' id='map-show-container' ref={map => this.mapNode = map}>
                </div>
            </div>);
  }

}




export default RouteShow;