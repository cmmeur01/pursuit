import { RECEIVE_ROUTE, RECEIVE_ROUTE_ERRORS } from './../actions/route_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
      return action.errors;
    case RECEIVE_ROUTE:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};