import React from "react";
import { Row } from "react-bootstrap";

class Score extends React.Component {
  state = {};
  render() {
    return (
      <Row className="score-div">
        <div className="score col d-flex justify-content-center">
          <h1>
            <span>Score:</span>
            <br></br>
            {this.props.score}
          </h1>
        </div>
      </Row>
    );
  }
}

export default Score;
