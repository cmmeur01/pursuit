import { connect } from 'react-redux';
import { signup, clearErrors } from './../../actions/sesssion_actions';
import SignupForm from './signup_form';

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
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SignupForm);
