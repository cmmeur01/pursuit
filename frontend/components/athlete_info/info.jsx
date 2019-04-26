import React from 'react';

class AthleteInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const round = (value, decimals) => (Number(Math.round(value + 'e' + decimals) + 'e-' + decimals));
    const dateCompare = (a, b) => {
      if (a.date > b.date) {
        return 1;
      } else if (a.date < b.date) {
        return -1;
      } else {
        return 0;
      }
    };
    let username = this.props.athlete[parseInt(this.props.currentUserId)].username;
    let workouts = Object.values(this.props.workouts);
    let runs = [];
    let bikes = [];
    for(let i = 0; i < workouts.length; i++) {
      if (workouts[i].sport === "Cycling") {
        bikes.push(workouts[i]);
      } else {
        runs.push(workouts[i]);
      }
    }
    let bikeDist = 0;
    for(let i = 0; i < bikes.length; i++) {
      if (this.props.routes[bikes[i].route_id] !== undefined) {
        bikeDist = bikeDist + this.props.routes[bikes[i].route_id].distance;
      }
    }
    let runDist = 0;
    for (let i = 0; i < runs.length; i++) {
      if (this.props.routes[runs[i].route_id] !== undefined) {
        runDist = runDist + this.props.routes[runs[i].route_id].distance;
      }
    }
    //oldest -> newest
    bikes.sort(dateCompare);
    runs.sort(dateCompare);
    let runDate;
    if (runs.length !== 0) {
      runDate = runs[runs.length - 1].date;
    }
    let bikeDate;
    if (bikes.length !== 0) {
      bikeDate = bikes[bikes.length - 1].date;
    }
    return (
      <div className="athlete-info-container">
        <h1>{username}</h1>
        <div className="work-route-disp">Total Workouts
          <div className="wo-inner-disp"><div>Running: {runs.length}</div><div>Cycling: {bikes.length}</div></div>
        </div>
        <div className="work-route-disp">Total Distance
          <div className="wo-inner-disp"><div className="wo-inner-fix">Running: {round(runDist / 1000, 2)}km</div><div className="wo-inner-fix">Cycling: {round(bikeDist/1000,2)}km</div></div>
        </div>
        <div className="work-route-disp">Last Workout
          <div className="wo-inner-disp"><div>Running: <br/>{runDate}</div><div>Cycling:<br/>{bikeDate}</div></div>
        </div>
        </div>
    );
  }


}

export default AthleteInfo;