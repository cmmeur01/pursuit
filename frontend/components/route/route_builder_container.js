import { connect } from 'react-redux';
import RouteMap from './route_map';
import { createRoute } from '../../actions/route_actions';
import { clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  let errors = [];
  if (state.errors.route) {
    errors = state.errors.route;
  }
  return ({
    errors: errors,
    userId: state.session.currentUserId,
    routes: state.entities.routes
  });
};

const mdp = dispatch => ({
  createRoute: (route) => dispatch(createRoute(route)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(RouteMap);