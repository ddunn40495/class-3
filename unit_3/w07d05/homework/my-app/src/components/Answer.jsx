import React from "react";
import { Row, Button } from "react-bootstrap";

class Answer extends React.Component {
  render() {
    return (
      <Row className="answer-div">
        <div className="col d-flex justify-content-center">
          <Button onClick={this.props.switch}>Reveal Answer</Button>
        </div>
        <div className="answer-box">{this.props.answer}</div>
      </Row>
    );
  }
}

export default Answer;
