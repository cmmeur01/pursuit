import { connect } from "react-redux";
import WorkoutMap from './workout_map_show';

const msp = (state, ownProps) => ({
  workout: state.entities.workouts,
});

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(WorkoutMap);