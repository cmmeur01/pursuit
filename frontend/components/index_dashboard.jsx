import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import DemoContainer from './session/demo_container';
import IndexContainer from './index_container';
import Page404 from './page_404';


const IndexDashboard = () => (
  <div className="index-container">
    <Route path="/" component={IndexContainer} />
    <AuthRoute exact path="/signup" component={SignupContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />
    <AuthRoute exact path="/demo" component={DemoContainer} />
  </div>
);


export default IndexDashboard;