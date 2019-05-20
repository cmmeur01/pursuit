import React from 'react';

class WorkoutIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let waypoints = google.maps.geometry.encoding.decodePath(this.props.route.route);

    let mapOptions = {
      center: waypoints[Math.floor(waypoints.length / 2)],
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    let polyLine = new google.maps.Polyline({
      path: waypoints,
      strokeColor: '#F73333',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      map: this.map
    });

  }

  render(){
    const round = (value, decimals) => (Number(Math.round(value + 'e' + decimals) + 'e-' + decimals));
    let hours = Math.floor(this.props.workout.duration/60);
    let minutes = this.props.workout.duration % 60;
    let type;
    if (this.props.workout.sport === "Cycling") {
      type = "rode";
    } else {
      type = "ran";
    }
    return (<div className="wo-idx-item" id="wo-idx-item">
      <li>
        <div className="top-wo-items">
          <h6>{this.props.users[this.props.workout.user_id].username} {type} on: {this.props.workout.date}</h6>
          <h2>{this.props.workout.title}</h2>
          <h5>{this.props.workout.description}</h5>
        </div>
        <div className="bottom-wo-items">
          <div className="wo-show-item"><h4>Distance:{round(this.props.route.distance / 1000, 2)}km</h4></div>
          <div className="wo-show-item"><h4>Elevation:{round(this.props.route.elevation, 1)}m</h4></div>
          <div className="wo-show-item"><h4>Duration:{hours}h{minutes}m</h4></div>
        </div>
        <div className='wo-idx-item-map' id='workout-idx-item-map' ref={map => this.mapNode = map}>
        </div>
      
      </li>
    </div>)
  }
}

export default WorkoutIndexItem;
