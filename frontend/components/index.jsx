import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import Splash from './splash/splash_container';
import NavBar from './nav_bar/nav_bar_container';
import AthleteInfo from './athlete_info/info_container';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const indexDisp = this.props.currentUser ? (
        <div>
          <NavBar />
          <ProtectedRoute exact path="/" component={AthleteInfo} />
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