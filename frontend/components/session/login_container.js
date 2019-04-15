import { connect } from 'react-redux';
import { login } from './../../actions/sesssion_actions';
import SessionForm from './session_form';

const msp = (state) => ({
  formType: "Log In"
});

const mdp = (dispatch) => ({
  processForm: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);
