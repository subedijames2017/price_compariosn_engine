import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="container-fluid">
        <form action="/" className="form">
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" defaultValue="Login" className="btn btn-info" />
        </form>
        <p className="my-1">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </section>
    );
  }
}
