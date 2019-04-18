import { connect } from 'react-redux';
import RouteBuilder from './route_builder';
import { createRoute } from '../../actions/route_actions';

const msp = state => ({
  userId: state.session.currentUserId
});

const mdp = dispatch => ({
  createRoute: (route) => dispatch(createRoute(route))
});

export default connect(msp, mdp)(RouteBuilder);