import { connect } from 'react-redux';
import { signup } from './../../actions/sesssion_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => ({
  formType: "Sign Up"
  // let errors = [];
  // if (state.errors.session.errors) {
  //   errors = state.errors.session.errors;
  // }
  // return ({
  //   errors: errors,
  //   formType: "signup"
  // });
});



const mdp = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);
