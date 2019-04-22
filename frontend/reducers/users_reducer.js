import { RECEIVE_CURRENT_USER } from './../actions/session_actions';
import { RECEIVE_USER } from './../actions/route_actions';
import merge from 'lodash/merge';

// this is gonna need to be updated with the 
// routeId's and workoutId's when implmented

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;