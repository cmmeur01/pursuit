import React from 'react';
import Splash from './../splash/splash';

export default ({ currentUser, logout }) => {

  const navDisp = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <Splash />
  );

  return (
    <div className="nav-bar">
      {navDisp}
    </div>
  )
};