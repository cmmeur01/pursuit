import React from 'react';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
  }
  // 38.2338858,-85.7309184
  componentDidMount() {
    const mapOptions = {
      center: { lat: 38.25, lng: -85.75 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>route map component</div>
    )
  }

}

export default RouteMap;