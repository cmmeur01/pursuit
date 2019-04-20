import { connect } from 'react-redux';
import RouteShow from './route_show';
import { getRoute, getOwner } from '../../actions/route_actions';

const msp = (state, ownProps) => ({
  route: state.entities.routes[ownProps.match.params.routeId],
  users: state.entities.users
});

const mdp = (dispatch) => ({
  getRoute: (id) => dispatch(getRoute(id)),
  getOwner: (id) => dispatch(getOwner(id)) 
});

export default connect(msp, mdp)(RouteShow);
