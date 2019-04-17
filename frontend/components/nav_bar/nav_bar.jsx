import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div className="nav-bar">
        <Link to="/"><button className="button">PURSUIT</button></Link>
      <button className="button" onClick={this.props.logout}>Log Out</button>
    </div>
    )
  }

}

export default NavBar;