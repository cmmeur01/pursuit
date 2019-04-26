import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getWorkouts(this.props.userId);
    this.props.getRoutes();
  }

  render(){
    const dateCompare = (a, b) => {
      if (a.date > b.date) {
        return 1;
      } else if (a.date < b.date) {
        return -1;
      } else {
        return 0;
      }
    };




    let workoutIndexItems;
    if (Object.entries(this.props.routes).length !== 0) {
      let workouts = Object.values(this.props.workouts);
      workouts.sort(dateCompare).reverse();
      workoutIndexItems = workouts.map((workout) => (<Link key={workout.id} to={`/workouts/${workout.id}`}>
        <div className="wo-idx-view">
          <WorkoutIndexItem workout={workout} route={this.props.routes[workout.route_id]} users={this.props.users}/>
        </div>
        </Link>))
    }
    return (<div className="workout-index-container">
      <ul>{workoutIndexItems}</ul>
    </div>)
  }
}

export default WorkoutIndex;