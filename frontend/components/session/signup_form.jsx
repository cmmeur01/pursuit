import React from 'react';

class SignupForm extends React.Component {
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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    let errors = "";
    if (this.props.errors !== undefined) {
      errors = this.props.errors.map(error => (<li key={error}>{error}</li>));
    }
    return (
      <div className="session-container">
        <div className="session-form">
          <div className="form-text">Join Pursuit now!</div>
          <div>
          <form className="form-form">
              <input type="text" 
                onChange={this.handleInput("username")}
                value={this.state.username}
                placeholder="Username" />
              <input type="password"
                onChange={this.handleInput("password")}
                value={this.state.password}
                placeholder="Password" />
            <button className="form-button" onClick={this.handleSubmit}>{this.props.formType}</button>
          </form>
          </div>
          <div className="session-form-errors">
            <ul>
              {errors}
            </ul>
          </div>
        </div>
        
      </div>
    )
  }

}

export default SignupForm;