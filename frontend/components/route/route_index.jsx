import React from 'react';
import RouteIndexItem from './route_index_item';
import { Link } from 'react-router-dom';

class RouteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRoutes();
  }

  render() {
    let routeList = "";
    if (this.props.routes != {}) {
      let routes = Object.values(this.props.routes);
      routeList = routes.map((route) => (<Link key={route.id} to={`/routes/${route.id}`}>
          <div className="route-idx-view">
          <RouteIndexItem route={route} />
      </div>
      </Link>));
    }

    return (<div>
              <div className="route-title">
                <h1>All Routes</h1>
                <Link to="/routes/new">
                  <button className="new-route-button">Create New Route</button>
                </Link>
              </div>
              <div className="routes-container">
                <ul className="route-list">
                  {routeList}
                </ul>
              </div>
            </div>
      )
  }


}

export default RouteIndex;