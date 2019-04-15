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
    return (
      <div className="session-form">
        <form>
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
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </div>
    )
  }

}

export default SessionForm;