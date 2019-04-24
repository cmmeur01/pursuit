import { create, getWorkouts, getSingleWorkout } from './../util/workout_api_util';

export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";

const receiveWorkout = (workout) => ({
  type: RECEIVE_WORKOUT,
  workout
});

const receiveWorkouts = (workouts) => ({
  type: RECEIVE_WORKOUTS,
  workouts
});

const receiveWorkoutErrors = (errors) => ({
  type: RECEIVE_WORKOUT_ERRORS,
  errors
});

export const createWorkout = (workout) => dispatch => {
  return create(workout).then(workout => dispatch(receiveWorkout(workout)),
    errors => dispatch(receiveWorkoutErrors(errors.responseJSON))
  );
};

export const getAllWorkouts = () => dispatch => {
  return getWorkouts().then(workouts => dispatch(receiveWorkouts(workouts)),
    errors => console.log(errors)
  );
};

export const getWorkout = (id) => dispatch => {
  return getSingleWorkout(id).then(workout => dispatch(receiveWorkout(workout)),
    errors => console.log(errors)
  );
};