import React from 'react';

class WorkoutShow extends React.Component {
  constructor(props){
    super(props);
    this.initMap = this.initMap.bind(this);
    this.createRequest = this.createRequest.bind(this);
    this.drawRoute = this.drawRoute.bind(this);
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
    let start = { lat: waypoints[0].lat(), lng: waypoints[0].lng() };
    let end = { lat: waypoints[waypoints.length - 1].lat(), lng: waypoints[waypoints.length - 1].lng() };
    let points = waypoints.slice(1, waypoints.length - 1);
    let middlePoints = [];
    points.forEach(point => (middlePoints.push({ location: { lat: point.lat(), lng: point.lng() } })));
    while (middlePoints.length > 22) {
      middlePoints = middlePoints.filter((x, idx) => (idx % 2 === 0));
    }
    request = { origin: start, destination: end, waypoints: middlePoints, travelMode: mode };
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

  paceCalc(distance, duration) {
    return (distance/duration);
  }

  componentDidMount() {
    this.props.getWorkout(parseInt(this.props.match.params.workoutId));
    this.initMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.workout !== this.props.workout) {
      this.props.getRoute(parseInt(this.props.workout.route_id));
    }
  }

  render() {
    const round = (value, decimals) => (Number(Math.round(value + 'e' + decimals) + 'e-' + decimals));
    let user;
    let sport;
    let date;
    let title;
    let description;
    let distance;
    let duration;
    let pace;
    let hours;
    let minutes;
    let elevation;
    if (this.props.workout && this.props.routes[this.props.workout.route_id]) {
      this.route = this.props.routes[this.props.workout.route_id];
      this.drawRoute(this.route.route);
      user = this.props.users[this.props.workout.user_id].username;
      sport = this.props.workout.sport;
      date = this.props.workout.date;
      title = this.props.workout.title;
      description = this.props.workout.description;
      distance = this.route.distance;
      duration = this.props.workout.duration;
      pace = this.paceCalc(distance, duration);
      hours = Math.floor(duration / 60);
      minutes = duration % 60;
      elevation = this.route.elevation;
    }

    return (<div className="workout-container">
              <div className="workout-title-bar"><h2>{user} - {sport}</h2></div>
              <div className="left-right-container">
              <div className="left-workout"><h6>On: {date}</h6> <h2>{title}</h2> <h3>{description}</h3></div>
              <div className="right-workout">
              <div className="right-top"><h2>{round(distance / 1000, 2)}km</h2><h2>{hours}h {minutes}m</h2> <h2>{round(elevation, 1)}m</h2></div>
              <div className="right-bottom"><h4>Distance</h4><h4>Time</h4><h4>Elevation</h4></div>
              </div>
              </div>
              <div className='map-show-container' id='map-show-container' ref={map => this.mapNode = map}>
              </div>
    
            </div>);
  }




}

export default WorkoutShow;