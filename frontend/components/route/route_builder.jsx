import React from 'react';
import RouteMap from './route_map';

class RouteBuilder extends React.Component {
  constructor(props){
    super(props);
    this.getMapData = this.getMapData.bind(this);
    this.state = {};
  }

  getMapData(mapData) {
    this.setState(mapData);
  }

  render() {
    return (
      <div>
        <RouteMap sendData={this.getMapData} />
      </div>
    )
  }




}

export default RouteBuilder;