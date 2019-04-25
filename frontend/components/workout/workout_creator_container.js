import { connect } from 'react-redux';
import WorkoutCreator from './workout_creator';
import { createWorkout } from './../../actions/workout_actions';
import { getAllRoutes } from './../../actions/route_actions';

const msp = (state, ownProps) => {
  let errors = [];
  if (state.errors.workout) {
    errors = state.errors.workout;
  }
  return ({
    errors: errors,
    routes: state.entities.routes,
    userId: parseInt(state.session.currentUserId)
  });
};

const mdp = (dispatch) => ({
  getRoutes: () => dispatch(getAllRoutes()),
  createWorkout: (workout) => dispatch(createWorkout(workout))
});

export default connect(msp, mdp)(WorkoutCreator);