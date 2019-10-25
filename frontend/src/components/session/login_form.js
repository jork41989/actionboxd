import React from 'react';
import { withRouter } from 'react-router-dom';
import './forms.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
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
      password: this.state.password
    };

    this.props.login(user)
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
      <div className={'signup-login-bg'}>
        <div >
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <form onSubmit={this.handleSubmit}>
            <div className={'formCenter'}>
              <p className={'formHeader'}>Sign In</p>
              <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                placeholder="Email" 
                className={'formInput'}
                id={'email'}
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className={'formInput'}
                  id={'password'}
                />
              <br/>
              <input type="submit" value="Sign In" className={'submit'}/>
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);