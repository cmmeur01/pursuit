import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from './../../actions/session_actions';

const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar);