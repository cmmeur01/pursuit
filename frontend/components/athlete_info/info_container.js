import AthleteInfo from './info';
import { connect } from 'react-redux';

const msp = (state, ownProps) => ({
  athlete: state.entities.users,
  currentUserId: state.session.currentUserId,
  routes: state.entities.routes, 
  workouts: state.entities.workouts
});

const mdp = dispatch => ({

});

export default connect(msp,mdp)(AthleteInfo);

