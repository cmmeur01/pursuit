import React from 'react';

class DemoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'test',
      password: 'password'
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
        <div className="session-form">
          <form>
            <label>Username
              <input type="text"
                onChange={this.handleInput("username")}
                value={this.state.username} />
            </label>
            <label>Password
              <input type="password"
                onChange={this.handleInput("password")}
                value={this.state.password} />
            </label>
            <button className="form-button" onClick={this.handleSubmit}>{this.props.formType}</button>
          </form>
        </div>
        <div className="session-form-errors">
          <ul>
            {errors}
          </ul>
        </div>
      </div>
    )
  }

}

export default DemoForm;