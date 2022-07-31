import React from "react";
import { Row } from "react-bootstrap";

class Worth extends React.Component {
  state = {};
  render() {
    return (
      <Row className="worth-row">
        <div className="font-change col d-flex justify-content-center">
          <h2>
            <span>Worth:</span>
            <br></br>
            {this.props.value} points
          </h2>
        </div>
      </Row>
    );
  }
}

export default Worth;
