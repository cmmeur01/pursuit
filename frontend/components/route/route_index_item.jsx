import React from 'react';
import IndexiFrame from './index_iframe';

class RouteIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.routeToWaypoints = this.routeToWaypoints.bind(this);
    this.createUrl = this.createUrl.bind(this);
  }

  routeToWaypoints(route) {
    return google.maps.geometry.encoding.decodePath(route);
  }

  createUrl(waypoints) {
    let key = window.googleAPIKey;
    let url = `https://www.google.com/maps/embed/v1/view?key=${key}`;
    let center = "&center=" + waypoints[0].lat().toString() + "," + waypoints[0].lng().toString() + "&zoom=12";
    url = url + center;
    return url; 
  }

  componentDidMount() {
    let url = this.createUrl(this.routeToWaypoints(this.props.route.route));
  }

  render() {
    const round = (value, decimals) => (Number(Math.round(value + 'e' + decimals) + 'e-' + decimals));

    return (<div className="route-list">
      <li>
      <p>Title: { this.props.route.title }</p>
      <p>Distance: { round((this.props.route.distance/1000),2) } (km)</p>
      <p>Elevation Gain: { round(this.props.route.elevation,1) } (m)</p>
        <IndexiFrame url={ this.createUrl(this.routeToWaypoints(this.props.route.route)) } />
      </li>
    </div>)
  }



}

export default RouteIndexItem;
