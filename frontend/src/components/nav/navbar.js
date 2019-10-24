import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="nav-links">
            <Link to={`/users/${this.props.currentUser.id}`} className="profile-link">{this.props.currentUser.username}</Link>
              <button onClick={this.logoutUser}>Logout</button>
          </div>
        );
      } else {
        return (
            <div className="nav-links">
              <button onClick={() => this.props.openModal('login')}>Login</button>
              <button onClick={() => this.props.openModal('signup')}>Create account</button>
            </div>
        );
      }
  }

  render() {
    
      return (
        <div className="navbar-section">
          <div className="NavBar">
<<<<<<< HEAD
            <Link to="/" ><h1 className="logo">ActionBoxd</h1></Link>
=======
            <div className={'logoDiv'}>
              <Link to={'/movies'} className={'logoDiv'} ><h1 className="logo"></h1> <h1 className={'logoText'}>ACTIONBOXED</h1></Link>
            </div>
>>>>>>> master
              { this.getLinks() }
          </div>
        </div>
      );
  }
}

export default NavBar;