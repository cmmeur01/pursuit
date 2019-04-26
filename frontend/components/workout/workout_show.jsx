import React from 'react';

class WorkoutShow extends React.Component {
  constructor(props){
    super(props);
    this.initMap = this.initMap.bind(this);
  }

  initMap() {
    let mapOptions = {
      center: { lat: 38.25, lng: -85.75 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
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
      this.props.getRoute(this.props.workout.route_id);
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
    let waypoints;
    let polyLine;
    if (this.props.workout && this.props.routes[this.props.workout.route_id]) {
      this.route = this.props.routes[this.props.workout.route_id];
      waypoints = google.maps.geometry.encoding.decodePath(this.props.routes[this.props.workout.route_id].route);
      if (this.map !== undefined) {
        this.map.setCenter(waypoints[waypoints.length/2]);
        polyLine = new google.maps.Polyline({
          path: waypoints,
          strokeColor: '#F73333',
          strokeOpacity: 1.0,
          strokeWeight: 2,
          map: this.map
        });
      }

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
              <div className="left-workout"><h6>On: {date}</h6> <h1>{title}</h1> <h5>{description}</h5></div>
              <div className="right-workout">
              <div className="right-top">
                <div className="work-show-inner"><h2>{round(distance / 1000, 2)}</h2><h5>km</h5></div>
                <div className="work-show-inner"><h2>{hours}</h2><h5>h</h5> <h2>{minutes}</h2><h5>m</h5></div>
                <div className="work-show-inner"><h2>{round(elevation, 1)}</h2><h5>m</h5></div> 
              </div>
              <div className="right-bottom"><h4>Distance</h4><h4>Time</h4><h4>Elevation</h4></div>
              </div>
              </div>
              <div className='map-show-container' id='map-show-container' ref={map => this.mapNode = map}>
              </div>
    
            </div>);
  }




}

export default WorkoutShow;