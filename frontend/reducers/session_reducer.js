import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUserId: null
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUserId: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};