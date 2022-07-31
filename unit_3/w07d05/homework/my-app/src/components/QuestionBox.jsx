import React from "react";
import { Row } from "react-bootstrap";

class QuestionBox extends React.Component {
  state = {};
  render() {
    return (
      <Row className="question-row">
        <div className="font-change col d-flex justify-content-center">
          <div className="q-box">
            <p className="q">{this.props.question}</p>
          </div>
        </div>
      </Row>
    );
  }
}

export default QuestionBox;
