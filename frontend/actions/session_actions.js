import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => {
    return dispatch(logoutCurrentUser());
  });
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};