import React from 'react';

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
      console.log(routes);

      routeList = routes.map((route) => (<li>{route.id}</li>));

    }

    return (<div className="route-index">
              <h1 className="route-title">Routes</h1>
              <div>
                <ul className="route-list">
                  {routeList}
                </ul>
              </div>
            </div>
      )
  }


}

export default RouteIndex;