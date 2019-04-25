import React from 'react';
import IndexiFrame from './index_iframe';

class RouteIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const round = (value, decimals) => (Number(Math.round(value + 'e' + decimals) + 'e-' + decimals));

    return (<div className="route-list">
      <li>
      <p>Title: { this.props.route.title }</p>
      <p>Distance: { round((this.props.route.distance/1000),2) } (km)</p>
      <p>Elevation Gain: { round(this.props.route.elevation,1) } (m)</p>
        <IndexiFrame route={this.props.route} />
      </li>
    </div>)
  }



}

export default RouteIndexItem;


