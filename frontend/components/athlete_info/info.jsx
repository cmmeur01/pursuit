import React from 'react';

class AthleteInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let username = this.props.athlete[parseInt(this.props.currentUserId)].username;
    return (
      <div className="athlete-info-container">
        <h1>{username}</h1>
        <div className="work-route-disp">
        <div>Workouts</div>
        <div>Routes</div>
        </div>
        <div className="last-work">Last Workout</div>
        <div className="work-link">Your Workouts</div>
        </div>
    );
  }


}

export default AthleteInfo;