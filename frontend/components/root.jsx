import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import IndexDashboard from './index_dashboard';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <IndexDashboard />
    </HashRouter>
  </Provider>
);

export default Root;