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
      date: null,
      hours: 0,
      minutes: 0
    };
    this.submitWorkout = this.submitWorkout.bind(this);
    this.updateRoute = this.updateRoute.bind(this);
    this.combinedClick = this.combinedClick.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.resetWorkout = this.resetWorkout.bind(this);
    this.updateDur = this.updateDur.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateRoute(e) {
    e.preventDefault();
    let id = e.target.getAttribute("routeid");
    this.setState({ route_id: id});
  }

  displayForm() {
    let form = document.getElementById("workout-form");
    form.setAttribute("class", "workout-form-show");
  }

  combinedClick(e) {
    this.updateRoute(e);
    this.displayForm();
  }

  resetWorkout() {
    let form = document.getElementById("workout-form");
    form.setAttribute("class", "workout-form");
    if (this.props.errors.length !== 0) {
      this.props.clearErrors();
    }
  }

  updateDur(e) {
    // debugger;
    let minutes = 0;
    let hours = 0;
    if (e.target.id === "hr") {
      hours = parseInt(e.target.value);
      this.setState({hours: hours});
      minutes = this.state.minutes;
    } else {
      minutes = parseInt(e.target.value);
      this.setState({minutes: minutes});
      hours = this.state.hours;
    }
    let total = minutes + (hours*60);
    this.setState({ duration: total });
  }

  submitWorkout() {
    this.props.createWorkout(this.state);
  }

  componentDidUpdate(prevProps) {
    if (this.props.workouts !== prevProps.workouts) {
      let next = Object.keys(this.props.workouts)[Object.keys(this.props.workouts).length - 1];
      this.props.history.push(`/workouts/${parseInt(next)}`);
    }
  }

  componentDidMount() {
    this.props.getRoutes();
    this.props.getUsers();
  }

  render() {
    const round = (value, decimals) => (Number(Math.round(value + 'e' + decimals) + 'e-' + decimals));
    let routeList = "";
    if (this.props.routes != {}) {
      let routes = Object.values(this.props.routes);
      routeList = routes.map((route) => (
        <li key={route.id} 
            routeid={route.id}
            className="route-idx-view"
            onClick={this.combinedClick}>
          <p>Title: {route.title}</p>
          <p>Distance: {round((route.distance / 1000), 2)} (km)</p>
          <p>Elevation Gain: {round(route.elevation, 1)} (m)</p>
          <WorkoutFrame route={route} />
        </li>));
    }
    let errors = "";
    if (this.props.errors !== undefined) {
      errors = this.props.errors.map(error => (<li key={error}>{error}</li>));
    }
    

    return (<div className="work-creator-container">
              <div className="workout-form" id="workout-form">
              <h1 className="save-title">Save Workout</h1>



                <div className="workout-new-top">

                  <div className="wo-top-test">
                  <label htmlFor="workout-date">Date </label>
                      <input type="date" name="workout-date" id="workout-date"
                        onChange={this.update("date")}/>   
                  </div>

                  <div className="wo-top-dur">
                  <label htmlFor="workout-time">Duration</label>
                    <div id="workout-time" className="workout-time">
                      <input type="text" id="hr"
                        // onChange={this.update("hours")}
                        onChange={this.updateDur}/>hours
                      <input type="text" id="min"
                        // onChange={this.update("minutes")} 
                        onChange={this.updateDur}/>minutes
                    </div>
                  </div>

                </div>
        


                <div className="workout-new-bottom">
                  <div className="workout-new-top">
                    <div className="test">
                    <label htmlFor="sport">Sport</label>
                      <select name="" id="sport"
                        onChange={this.update("sport")}>
                        <option value="Cycling">Cycling</option>
                        <option value="Running">Running</option>
                      </select>
                    </div>

                    <div className="wo-top-title">
                    <label htmlFor="workout-title">Title</label>
                      <input type="text" id="workout-title"
                        onChange={this.update("title")} /> 
                    </div>
                  </div>  

                  <div className="test">
                  <label htmlFor="workout-desc">Description</label>
                    <textarea rows="4" cols="20" id="workout-desc"
                      onChange={this.update("description")}/>
                  </div>

                  <div className="submit-buttons">
                    <button className="save-button" onClick={this.submitWorkout}>Submit Workout</button>
                    <button className="cancel-button" onClick={this.resetWorkout}>Cancel</button>
                  </div>

                </div>

                <div className="workout-errors">
                  {errors}
                </div>
              </div>
              <div className="routes-container" id="routes-container">
                <h1>Select Route for Workout</h1>
                <div className="workout-routes">
                
                  <ul className="route-list">
                    {routeList}
                  </ul>
                </div>
              </div>
    </div>);
  }
}

export default WorkoutCreator;