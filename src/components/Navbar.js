import React, { Component } from "react";

export default class Navbar extends Component {
  handelLogout = (e) => {
    e.preventDefault();
    this.props.clearCurrentUser();
    this.props.logoutuser();
    //console.log("this is working");
  };
  render() {
    return (
      <nav className="navbar bg-blue">
        <h1>
          <a href="dashboard.html">
            <i className="fa fa-briefcase" aria-hidden="true"></i> Price
            Comparison Engine
          </a>
        </h1>
        <ul>
          <li className="nav-item">
            <a href="/">
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="/profile"
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              <i className="fa fa-user" aria-hidden="true"></i> Profile
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="/" className="dropdown-item">
                <i className="fa fa-key" aria-hidden="true"></i> Recommended
                products
              </a>
              <div className="dropdown-divider" />
              <a href="/" className="dropdown-item">
                <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a href="/login">
              <i className="fa fa-sign-out" aria-hidden="true"></i> Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
