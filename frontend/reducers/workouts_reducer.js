import { RECEIVE_WORKOUT, RECEIVE_WORKOUT_ERRORS, RECEIVE_WORKOUTS } from './../actions/workout_actions';
import merge from 'lodash/merge';

const workoutsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKOUT:
      return merge({}, state, { [action.workout.id]: action.workout });
    case RECEIVE_WORKOUTS:
      return merge({}, state, action.workouts);
    case RECEIVE_WORKOUT_ERRORS:
      return state;
    default:
      return state;
  }
};

export default workoutsReducer;