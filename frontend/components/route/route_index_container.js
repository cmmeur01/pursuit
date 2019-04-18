import { connect } from 'react-redux';
import RouteIndex from './route_index';
import { getAllRoutes } from '../../actions/route_actions';

const msp = (state) => ({
  routes: state.entities.routes
});

const mdp = (dispatch) => ({
  getRoutes: () => dispatch(getAllRoutes())
});

export default connect(msp, mdp)(RouteIndex);





