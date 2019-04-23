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
        <div className="route-drop">
          <button className="nav-button">Routes</button>
          <div className="r-drop-cont">
              <li><Link to="/routes">All Routes</Link></li><br/>
              <li><Link to="/routes/new">New Route</Link></li>
          </div>
        </div>


      <button className="nav-button" onClick={this.props.logout}>Log Out</button>
    </div>
    )
  }

}

export default NavBar;