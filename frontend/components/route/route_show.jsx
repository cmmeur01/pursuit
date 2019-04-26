import React from 'react';
import RouteSummary from './route_summary';
import { Link } from 'react-router-dom';

class RouteShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { route: this.props.route };
    this.initMap = this.initMap.bind(this);
  }

  initMap() {
    let mapOptions = {
      center: { lat: 38.25, lng: -85.75 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  componentDidMount() {
    this.props.getRoute(parseInt(this.props.match.params.routeId));
    this.initMap();
  }

  render() {
    let routeTitle = "";
    let routeDesc = "";
    if (this.props.route) {
      routeTitle = this.props.route.title;
      routeDesc = this.props.route.description;
      let waypoints = google.maps.geometry.encoding.decodePath(this.props.route.route);
      let polyLine = new google.maps.Polyline({
        path: waypoints,
        strokeColor: '#F73333',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: this.map
      });
    }
    
    return (<div className="route-show">
              <div>
                <h1>{routeTitle}</h1>
                <h4 className="route-desc">{routeDesc}</h4>
                <Link to="/workouts/new">
                <button className="route-button">New Workout</button></Link>
                  <div className='map-show-container' id='map-show-container' ref={map => this.mapNode = map}>
                 </div>
              </div>
              <div className="route-info-container">
                <div className="route-info"><RouteSummary route={this.props.route} users={this.props.users} getOwner={this.props.getOwner}/></div>
                <div className="route-leaderboard"></div>
              </div>
            </div>);
  }

}




export default RouteShow;