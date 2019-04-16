import { connect } from 'react-redux';
import { login } from './../../actions/sesssion_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  let errors = [];
  if (state.errors.session) {
    errors = state.errors.session;
  }
  return ({
    errors: errors,
    formType: "Log Up"
  });
};

const mdp = (dispatch) => ({
  processForm: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);
