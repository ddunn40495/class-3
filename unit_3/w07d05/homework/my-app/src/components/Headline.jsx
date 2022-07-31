import React from "react";
import { Row } from "react-bootstrap";

class Headline extends React.Component {
  state = {};
  render() {
    return (
      <Row className="headline-div">
        <div className="name col d-flex justify-content-center">
          <div className="headline-box d-flex justify-content-center">
            <h1 className="headline">Welcome to Jepardy</h1>
          </div>
        </div>
      </Row>
    );
  }
}

export default Headline;
