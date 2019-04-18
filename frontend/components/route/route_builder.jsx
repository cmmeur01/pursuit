import React from 'react';
import RouteMap from './route_map';

class RouteBuilder extends React.Component {
  constructor(props){
    super(props);
    this.getMapData = this.getMapData.bind(this);
    this.state = { waypoints: null };
  }

  getMapData(mapData) {
    this.setState(mapData);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <RouteMap sendData={this.getMapData} createRoute={this.props.createRoute} userId={this.props.userId} />
      </div>
    )
  }




}

export default RouteBuilder;