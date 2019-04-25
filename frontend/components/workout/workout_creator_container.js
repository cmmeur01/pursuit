import { connect } from 'react-redux';
import WorkoutCreator from './workout_creator';
import { createWorkout } from './../../actions/workout_actions';
import { getAllRoutes } from './../../actions/route_actions';
import { clearErrors } from './../../actions/session_actions';
import { getAllUsers } from './../../actions/user_actions';

const msp = (state, ownProps) => {
  let errors = [];
  if (state.errors.workout) {
    errors = state.errors.workout;
  }
  return ({
    errors: errors,
    routes: state.entities.routes,
    userId: parseInt(state.session.currentUserId),
    workouts: state.entities.workouts
  });
};

const mdp = (dispatch) => ({
  getRoutes: () => dispatch(getAllRoutes()),
  createWorkout: (workout) => dispatch(createWorkout(workout)),
  clearErrors: () => dispatch(clearErrors()),
  getUsers: () => dispatch(getAllUsers())
});

export default connect(msp, mdp)(WorkoutCreator);