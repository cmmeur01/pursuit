import React from 'react';

class RouteSummary extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let round = (value, decimals) => (Number(Math.round(value + 'e' + decimals) + 'e-' + decimals));
    let elevation = 0;
    let length = 0;
    let type = "";
    if (this.props.route) {
      length = round((this.props.route.distance / 1000), 2);
      elevation = round(this.props.route.elevation,1);
      type = this.props.route.sport;
    }

    return (<div>
              <div>Created by username here</div>
                <div className="dist-container">
                <div className="dist-inner">
                  <h2>{length}km</h2>
                  <h4>Distance</h4>
                </div>                
                  <div className="dist-inner">
                   <h2>{elevation}m</h2>
                    <h4>Elevation</h4>
                  </div>
                  <div className="dist-inner">
                    <h2>{type}</h2>
                    <h4>Route Type</h4>
                  </div>
                </div>
          </div>)
  }
}

export default RouteSummary;