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
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  value=""
                  as="textarea"
                  rows="3"
                  placeholder="Enter Product"
                />
              </Form.Group>
              <Button variant="info" type="submit">
                Compare Product Price
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Landingpage;
