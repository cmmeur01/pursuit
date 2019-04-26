import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { getAllWorkouts } from './../../actions/workout_actions';
import { getAllRoutes } from './../../actions/route_actions';

const msp = (state) => ({
  userId: parseInt(state.session.currentUserId),
  routes: state.entities.routes,
  workouts: state.entities.workouts,
  users: state.entities.users
});

const mdp = (dispatch) => ({
  getRoutes: () => dispatch(getAllRoutes()),
  getWorkouts: (userId) => dispatch(getAllWorkouts(userId))
});

export default connect(msp, mdp)(WorkoutIndex);