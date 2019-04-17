import React from 'react';
import Splash from './splash/splash_container';
import NavBar from './nav_bar/nav_bar_container';
import RouteBuilder from './route/route_builder';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const indexDisp = this.props.currentUser ? (
        <div>
          <NavBar />
          <RouteBuilder />
        </div>
    ) : (
        <Splash location={this.props.history.location.pathname} />
      );

    return (
      <div>
        {indexDisp}
      </div>
    )
  }
}

export default Index;