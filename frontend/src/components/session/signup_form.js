import React from 'react';
import { withRouter } from 'react-router-dom';
import './forms.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated === true) {
      this.props.closeModal()
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
     username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
    
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-login-bg">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <form onSubmit={this.handleSubmit}>
          <div className="formCenter">
            <p className={'formHeader'}>Create Account</p>
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              className={'formInput'}
              />
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              className={'formInput'}
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              className={'formInput'}
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              className={'formInput'}
              />
            <br/>
            <input type="submit" value="Sign Up" className={'submit'} />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);