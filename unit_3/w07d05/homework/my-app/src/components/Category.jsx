import React from "react";
import { Row } from "react-bootstrap";

class Category extends React.Component {
  state = {};
  render() {
    return (
      <Row className="category-row">
        <div className="font-change col d-flex justify-content-center">
          <h2 className="">
            <span>Category:</span>
            <br></br>
            {this.props.category}
          </h2>
        </div>
      </Row>
    );
  }
}

export default Category;
