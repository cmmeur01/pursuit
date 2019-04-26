import React from 'react';

class WorkoutIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (<div className="wo-idx-item">
      <li>
        <p>{this.props.workout.title}</p>
        <p>{this.props.route.title}</p>
      
      </li>
    </div>)
  }
}

export default WorkoutIndexItem;