import React from "react";
import Square from "./Square";
class Board extends React.Component {
  render() {
    return (
      <div>
        <h2>Board</h2>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    );
  }
}

export default Board;
