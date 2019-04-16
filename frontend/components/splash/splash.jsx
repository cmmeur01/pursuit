import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash-container">
      <img className="splash-bg" src={window.splashImg} />
      <Link className="top-right-login" to="/login">
        <button className="button">
          Log In
        </button>
      </Link>
      <Link className="top-right-signup" to="/signup">
        <button className="button">
          Sign Up
        </button>
      </Link>
      <header className="tagline">Pursuit: The #2 webapp for cyclists and runners</header>
    </div>
  );
}

export default Splash;



