import React from "react";
import { Row, Button } from "react-bootstrap";

class QButton extends React.Component {
  state = {};
  render() {
    return (
      <Row className="qbutton-row">
        <div className="qbutton-box col d-flex justify-content-center">
          <Button onClick={this.props.question}>Get Question</Button>
        </div>
      </Row>
    );
  }
}

export default QButton;
