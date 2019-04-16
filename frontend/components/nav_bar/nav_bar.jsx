import React from 'react';
import Splash from './../splash/splash_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navDisp = this.props.currentUser ? (
      <div>
        <p>Hello, {this.props.currentUser.username}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
        <Splash location={this.props.history.location.pathname} />
      );

    return (
      <div className="nav-bar">
        {navDisp}
      </div>
    )
  }
}

export default NavBar;