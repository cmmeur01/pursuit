import React from 'react';


class WorkoutFrame extends React.Component {
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

  render() {
    return (
      <div className='item-map' id='item-map' ref={map => this.mapNode = map}>
      </div>
    )
  }
}

export default WorkoutFrame;