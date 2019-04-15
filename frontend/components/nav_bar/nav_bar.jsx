import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {

  const navDisp = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <nav>
      <Link to="/signup" >Sign Up</Link>
      <Link to="/login" >Log In</Link>
    </nav>
  );

  return (
    <div className="nav-bar">
      <img className="nav-logo" src="" />
      {navDisp}
    </div>
  )
};