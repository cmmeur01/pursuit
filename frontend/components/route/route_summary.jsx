import React from 'react';

class RouteSummary extends React.Component {
  constructor(props){
    super(props);
    this.owner = "";
  }

  componentDidUpdate() {
    if (this.props.users[this.props.route.user_id].username === undefined) {
      this.props.getOwner(this.props.route.user_id);
    }
  }

  render() {
    let round = (value, decimals) => (Number(Math.round(value + 'e' + decimals) + 'e-' + decimals));
    let elevation = 0;
    let length = 0;
    let type = "";
    let owner = "";
    // this.props.getOwner(this.props.route.user_id);
    if (this.props.route) {
      // this.props.getOwner(this.props.route.user_id);
      length = round((this.props.route.distance / 1000), 2);
      elevation = round(this.props.route.elevation,1);
      type = this.props.route.sport;
      owner = this.props.users[this.props.route.user_id].username;
    }

    return (<div>
              <div><h1>By {owner}</h1></div>
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