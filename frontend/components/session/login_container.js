import { connect } from 'react-redux';
import { login, clearErrors } from './../../actions/session_actions';
import LoginForm from './login_form';

const msp = (state, ownProps) => {
  let errors = [];
  if (state.errors.session) {
    errors = state.errors.session;
  }
  return ({
    errors: errors,
    formType: "Log In"
  });
};

const mdp = (dispatch) => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(LoginForm);
