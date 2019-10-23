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
            <Link to="/" ><h1 className="logo">ActionBoxd</h1></Link>
              { this.getLinks() }
          </div>
        </div>
      );
  }
}

export default NavBar;