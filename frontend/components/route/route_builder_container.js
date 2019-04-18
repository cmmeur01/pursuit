import { connect } from 'react-redux';
import RouteMap from './route_map';
import { createRoute } from '../../actions/route_actions';

const msp = state => ({
  userId: state.session.currentUserId
});

const mdp = dispatch => ({
  createRoute: (route) => dispatch(createRoute(route))
});

export default connect(msp, mdp)(RouteMap);