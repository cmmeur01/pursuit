import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import DemoContainer from './session/demo_container';
import IndexContainer from './index_container';
import RouteIndex from './route/route_index_container';
import RouteShow from './route/route_show_container';
import RouteMap from './route/route_builder_container';
import Page404 from './page_404';


const IndexDashboard = () => (
  <div className="index-container">
    <Route path="/" component={IndexContainer} />
    <Switch>
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/demo" component={DemoContainer} />
      <ProtectedRoute exact path="/routes" component={RouteIndex} />
      <ProtectedRoute exact path="/routes/new" component={RouteMap} />
      <ProtectedRoute exact path="/routes/:routeId" component={RouteShow} />
    </Switch>
  </div>
);


export default IndexDashboard;