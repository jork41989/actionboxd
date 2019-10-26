import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import Search from "../search/search_bar_component";
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
              <button onClick={() => this.props.openModal({modal: 'login'})}>Login</button>
            <button onClick={() => this.props.openModal({modal: 'signup'})}>Create account</button>
            </div>
        );
      }
  }

  render() {
    
      return (
        <div className="navbar-section">
          <div className="NavBar">
            <div className={'logoDiv'}>
              <Link to={'/'} className={'logoDiv'} ><h1 className="logo"></h1> <h1 className={'logoText'}>ACTIONBOXED</h1></Link>
            </div>
              { this.getLinks() }
            <div>
              <Search />
            </div>
          </div>
        </div>
      );
  }
}

export default NavBar;