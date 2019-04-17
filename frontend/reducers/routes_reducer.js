import { RECEIVE_ROUTE } from './../actions/route_actions';
import merge from 'lodash/merge';

const routesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE:
      return merge({}, state, { [action.currentUser.id]: action.route });
    default:
      return state;
  }
};

export default routesReducer;