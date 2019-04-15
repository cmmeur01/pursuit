import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const IndexDashboard = () => (
  <div className="index-container">
    <header>
      <Route path="/" component={NavBarContainer} />
    </header>
    <AuthRoute exact path="/signup" component={SignupContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />
  </div>
);


export default IndexDashboard;