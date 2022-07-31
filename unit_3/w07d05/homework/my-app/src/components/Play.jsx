import React from "react";
import { Row } from "react-bootstrap";

class Play extends React.Component {
  state = {};
  render() {
    return (
      <Row className="play-row">
        <div className="play-headline col d-flex justify-content-center">
          <h1>Lets Play</h1>
        </div>
      </Row>
    );
  }
}

export default Play;
