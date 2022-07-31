import React from "react";
import { receipt1, receipt2, receipt3 } from "./data";
import Karolin from "./components/Karolin";
import Jerrica from "./components/Jerrica";
import Matt from "./components/Matt";
import "./App.css";

class App extends React.Component {
  state = {
    receipt1,
    receipt2,
    receipt3,
  };
  checkPayment = (bool, cost) => {
    if (bool === false) {
      return (
        <span>
          You owe ${cost}
          <button>Pay Bill</button>
        </span>
      );
    } else {
      return (
        <span>
          Thank You
          <button>Leave Yelp Review</button>
        </span>
      );
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Reciepts </h2>
        </div>
        <div className="row">
          <Karolin
            receipt={this.state.receipt1}
            checkBill={this.checkPayment}
          />
          <Jerrica
            receipt={this.state.receipt2}
            checkBill={this.checkPayment}
          />
          <Matt receipt={this.state.receipt3} checkBill={this.checkPayment} />
        </div>
      </div>
    );
  }
}

export default App;
