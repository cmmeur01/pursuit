import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { getWorkout } from './../../actions/workout_actions';
import { getRoute } from './../../actions/route_actions';

const msp = (state, ownProps) => ({
  workout: state.entities.workouts[ownProps.match.params.workoutId],
  routes: state.entities.routes
});

const mdp = (dispatch) => ({
  getWorkout: (id) => dispatch(getWorkout(id)),
  getRoute: (id) => dispatch(getRoute(id))
});

export default connect(msp, mdp)(WorkoutShow);