import { RECEIVE_ROUTE, RECEIVE_ROUTE_ERRORS, RECEIVE_ROUTES } from './../actions/route_actions';
import merge from 'lodash/merge';

const routesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE:
      return merge({}, state, { [action.route.id]: action.route });
    case RECEIVE_ROUTES:
      return merge({}, state, action.routes);
    case RECEIVE_ROUTE_ERRORS:
      return state;
    default:
      return state;
  }
};

export default routesReducer;