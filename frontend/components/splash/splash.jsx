import React from 'react';
import { Link } from 'react-router-dom';
import login from './../../actions/session_actions';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.location === "/") {
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
          <Link className="top-left-demo" to="/demo">
            <button className="button">
              Demo
          </button>
          </Link>
          <header className="tagline">Pursuit: The #2 webapp for cyclists and runners</header>
        </div>
      )
    } else if (this.props.location === "/demo") {
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
      )
    } else if (this.props.location === "/signup") {
      return (
        <div className="splash-container">
          <img className="splash-bg" src={window.splashImg} />
          <Link className="top-right-login" to="/login">
            <button className="button">
              Log In
          </button>
          </Link>
          <Link className="top-left-demo" to="/demo">
            <button className="button">
              Demo
          </button>
          </Link>
          <header className="tagline">Pursuit: The #2 webapp for cyclists and runners</header>
        </div>
      )
    } else {
      return (
        <div className="splash-container">
          <img className="splash-bg" src={window.splashImg} />
          <Link className="top-right-login" to="/signup">
            <button className="button">
              Sign Up
          </button>
          </Link>
          <Link className="top-left-demo" to="/demo">
            <button className="button">
              Demo
          </button>
          </Link>
          <header className="tagline">Pursuit: The #2 webapp for cyclists and runners</header>
        </div>
      )
    }
  }

}


export default Splash;



