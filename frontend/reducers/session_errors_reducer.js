import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/sesssion_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

