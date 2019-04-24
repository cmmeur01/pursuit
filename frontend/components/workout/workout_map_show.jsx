import React from 'react';


class WorkoutMap extends React.Component {
  constructor(props) {
    super(props);
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

  drawRoute(route) {
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
    debugger;
    this.props.getRoute(this.props.workout.route_id);
  }

  render() {
    return (
      <div>
        <div className='workout-show-container' id='workout-show-container' ref={map => this.mapNode = map}>
        hello
        </div>
      </div>
    )
  }
}

export default WorkoutMap;