import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div className="nav-bar">
        <Link to="/">
          <img className="nav-logo" src={window.logo} />
        </Link>
        <Link to="/routes"><button className="button">Routes</button></Link>
      <button className="button" onClick={this.props.logout}>Log Out</button>
    </div>
    )
  }

}

export default NavBar;