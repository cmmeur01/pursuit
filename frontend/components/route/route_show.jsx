import React from 'react';
import RouteSummary from './route_summary';

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
    let routeDesc = "";
    if (this.props.route) {
      routeTitle = this.props.route.title;
      routeDesc = this.props.route.description;
      this.drawRoute(this.props.route.route);
    }

    return (<div className="route-show">
              <div>
                <h1>{routeTitle}</h1>
                <h4 className="route-desc">{routeDesc}</h4>
                  <button className="route-button">New Workout</button>
                  <div className='map-show-container' id='map-show-container' ref={map => this.mapNode = map}>
                 </div>
              </div>
              <div className="route-info-container">
                <div className="route-info"><RouteSummary route={this.props.route} users={this.props.users} getOwner={this.props.getOwner}/></div>
                <div className="route-leaderboard">this is where the route leaderboard will display</div>
              </div>
            </div>);
  }

}




export default RouteShow;