import React from 'react';
import WorkoutFrame from './workout-frame';

class WorkoutCreator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.userId,
      route_id: null,
      title: "",
      description: "",
      sport: "Cycling",
      duration: null,
      date: null
    };
    this.submitWorkout = this.submitWorkout.bind(this);
    this.updateRoute = this.updateRoute.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateRoute(e) {
    let id = e.target.getAttribute("routeid");
    console.log(id);
    this.setState({ route_id: id});
  }

  submitWorkout() {
    this.props.createWorkout(this.state);
  }

  componentDidMount() {
    this.props.getRoutes();
  }

  render() {
    let routeList = "";
    if (this.props.routes != {}) {
      let routes = Object.values(this.props.routes);
      routeList = routes.map((route) => (
        <div key={route.id} 
            routeid={route.id}
            className="route-idx-view"
            onClick={this.updateRoute}>
          <WorkoutFrame route={route} />
        </div>));
    }
    let errors = "";
    if (this.props.errors !== undefined) {
      errors = this.props.errors.map(error => (<li key={error}>{error}</li>));
    }

    return (<div className="work-creator-container">
              <div className="workout-errors">
                {errors}
              </div>
              <div className="workout-new-bottom">
                <label>Date
                  <input type="date" name="workout-date" id="workout-date"
                    onChange={this.update("date")}/>   
                </label>
                <label>Duration
                  <input type="text" 
                    onChange={this.update("duration")}/>
                </label>
              </div>
              <div className="workout-new-bottom">
                <label>Sport
                  <select name="" id=""
                    onChange={this.update("sport")}>
                    <option value="Cycling">Cycling</option>
                    <option value="Running">Running</option>
                  </select>
                </label>
                <label>Title
                  <input type="text"
                    onChange={this.update("title")} /> 
                </label>
                <label>Description
                  <textarea rows="4" cols="20"
                    onChange={this.update("description")}/>
                </label>
                <button onClick={this.submitWorkout}>Submit Workout</button>
              </div>
              <div className="workout-routes">
                <ul className="route-list">
                  {routeList}
                </ul>
              </div>
    </div>);
  }
}

export default WorkoutCreator;