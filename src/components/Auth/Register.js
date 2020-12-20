import React, { Component } from "react";
export default class Register extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="container-fluid">
        <form action="/login" className="form">
          <div className="form-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Conform Password" />
          </div>
          <input
            type="submit"
            defaultvalue="Register"
            className="btn btn-info"
          />
        </form>
        <p className="my-1">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </section>
    );
  }
}
