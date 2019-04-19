import { connect } from 'react-redux';
import RouteShow from './route_show';
import { getRoute } from '../../actions/route_actions';

const msp = (state, ownProps) => ({
  route: state.entities.routes[ownProps.match.params.routeId]
});

const mdp = (dispatch) => ({
  getRoute: (id) => dispatch(getRoute(id))
});

export default connect(msp, mdp)(RouteShow);
