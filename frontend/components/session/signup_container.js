import { connect } from 'react-redux';
import { signup } from './../../actions/sesssion_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  let errors = [];
  if (state.errors.session) {
    errors = state.errors.session;
  }
  return ({
    errors: errors,
    formType: "Sign Up"
  });
};

const mdp = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);
