import React, { Component } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

class Landingpage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content" className="container-fluid">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <form action="/" className="form">
              <div className="form-group">
                <textarea type="name" placeholder="Enter product" />
              </div>
              <button type="submit" className="btn btn-info">
                Compare Product Price
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Landingpage;
