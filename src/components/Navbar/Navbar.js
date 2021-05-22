import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AppContext from '../../AppContext';
import Logo from '../../images/rose-512.png';

class Nav extends Component {
  static contextType = AppContext;

  logout = () => {
    this.context.setStatus(null)
    localStorage.clear()
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-logo'>
          <Link to='/'>
            <img className="logo-image" src={Logo} alt="ROSE GARDN" />
          </Link>
          <Link to='/'>
            <h1>ROSEGARDN</h1>
          </Link>
        </div>
        <ul className="hamburger">
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
        </ul>
        <ul className="nav">
          {this.context.status ? (
            <>
              <li className="nav-item">
                <Link to="/mygardn">My Gardn</Link>
              </li>
              <li className="nav-item">
                <Link to="/add-rose">Add New Rose</Link>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={this.logout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    )
  }
}

export default Nav;