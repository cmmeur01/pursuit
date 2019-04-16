import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    let errors = "";
    if (this.props.errors !== undefined) {
      errors = this.props.errors.map(error => (<li key={error}>{error}</li>));
    }
    return (
      <div className="session-container">
        <ul className="session-form-errors">
          {errors}
        </ul>
        <form className="session-form">
          <label>Username
            <input type="text" 
              //  value={this.state.username} 
              onChange={this.handleInput("username")} />
          </label>
          <label>Password
            <input type="password"
              // value={this.state.password}
              onChange={this.handleInput("password")} />
          </label>
          <button className="button" onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </div>
    )
  }

}

export default SessionForm;