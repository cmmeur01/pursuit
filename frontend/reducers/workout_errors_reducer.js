import { RECEIVE_WORKOUT, RECEIVE_WORKOUT_ERRORS } from './../actions/workout_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKOUT_ERRORS:
      return action.errors;
    case RECEIVE_WORKOUT:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};