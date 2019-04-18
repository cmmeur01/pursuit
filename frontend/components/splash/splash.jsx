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
        <div className="main-links">
          <Link className="top-right-login" to="/login">
            <button className="button">
              Log In
            </button>
          </Link>
          <Link className="main-signup" to="/signup">
            <button className="button">
              Create an account
            </button>
          </Link>
          <Link className="top-left-demo" to="/demo">
            <button className="button">
              Demo
            </button>
          </Link>
          <div className="splash-container">
            <img className="splash" src={window.splash} />
            
            <header className="splash-tagline">Pursuit: The #2 webapp for cyclists and runners</header>
          </div>
        </div>
      )
    } else if (this.props.location === "/demo") {
      return (
        <div>
          <Link className="top-right-login" to="/login">
            <button className="button-login">
              Log In
            </button>
          </Link>
          <Link className="top-right-signup" to="/signup">
            <button className="button-login">
              Sign Up
            </button>
          </Link>
          <div className="splash-container">
            <img className="splash-bg" src={window.splashImg} />
          </div>    
        </div>    
      )
    } else if (this.props.location === "/signup") {
      return (
        <div>
          <Link className="top-right-login" to="/login">
            <button className="button-login">
              Log In
            </button>
          </Link>
          <Link className="top-left-demo" to="/demo">
            <button className="button-login">
              Demo
            </button>
          </Link>
          <div className="splash-container">
            <img className="splash-bg" src={window.splashImg} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Link className="top-right-login" to="/signup">
            <button className="button-login">
              Sign Up
            </button>
          </Link>
          <Link className="top-left-demo" to="/demo">
            <button className="button-login">
              Demo
            </button>
          </Link>
          <div className="splash-container">
            <img className="splash-bg" src={window.splashImg} />
          </div>
        </div>
      )
    }
  }

}


export default Splash;



