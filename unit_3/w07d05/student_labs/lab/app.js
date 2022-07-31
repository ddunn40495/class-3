const receipt1 = {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
  const receipt2 = {
    person: 'Jerrica',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  }
  const receipt3 = {
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: true
  }

  class Karolin extends React.Component {
      state = {
          bool: this.props.receipt.paid,
          cost: this.props.receipt.order.cost
      }
    
    render() {
      return (
        <div className='col card big-box'>
            <div className='card-body'>
            <div className='name-box'>
                <h3>{this.props.receipt.person}</h3>
            </div>
            <div className='order-box'>
                <h3>
                    <span>Main:</span>
                    {this.props.receipt.order.main}
                    <p>Toppings:</p>
                    <ul className="list-group list-group-flush">
                        {
                            this.props.receipt.order.toppings.map(
                                (topping) => {
                                return <li className='list-group-item'>{topping}</li>
                                }
                            )
                        }

                    </ul>
                </h3>
                <h3>
                    <span>Protein:</span>
                    {this.props.receipt.order.protein}
                </h3>
                <h3>
                    <span>Rice:</span>
                    {this.props.receipt.order.rice}
                </h3>
                <h3>
                    <span>Sauce:</span>
                    {this.props.receipt.order.sauce}
                </h3>
                <h3>
                    <span>Drinks:</span>
                    {this.props.receipt.order.drink}
                </h3>
                <h3>
                    <span>Cost:</span>
                    {this.props.receipt.order.cost}
                </h3>
                <h3>
                    <span>Is Bill Paid?</span><br></br>
                    {this.props.checkBill(this.state.bool, this.state.cost)}
                </h3>

            </div>

            </div>
        </div>
      )
  }

}


class Jerrica extends React.Component {
    state = {
        bool: this.props.receipt.paid,
        cost: this.props.receipt.order.cost
    }
    
    render() {
      return (
        <div className='col card big-box'>
            <div className='card-body'>
                <div className='name-box'>
                <h3>{this.props.receipt.person}</h3>
            </div>
            <div className='order-box'>
                <h3>
                    <span>Main:</span>
                    {this.props.receipt.order.main}
                    <p>Toppings:</p>
                    <ul className="list-group list-group-flush">
                        {
                            this.props.receipt.order.toppings.map(
                                (topping) => {
                                return <li className='list-group-item'>{topping}</li>
                                }
                            )
                        }

                    </ul>
                </h3>
                <h3>
                    <span>Protein:</span>
                    {this.props.receipt.order.protein}
                </h3>
                <h3>
                    <span>Rice:</span>
                    {this.props.receipt.order.rice}
                </h3>
                <h3>
                    <span>Sauce:</span>
                    {this.props.receipt.order.sauce}
                </h3>
                <h3>
                    <span>Drinks:</span>
                    {this.props.receipt.order.drink}
                </h3>
                <h3>
                    <span>Cost:</span>
                    {this.props.receipt.order.cost}
                </h3>
                <h3>
                    <span>Is Bill Paid?</span><br></br>
                    {this.props.checkBill(this.state.bool, this.state.cost)}
                </h3>

            </div>
            </div>
        </div>
      )
  }

}

class Matt extends React.Component {
    state = {
        bool: this.props.receipt.paid,
        cost: this.props.receipt.order.cost
    }

    render() {
      return (
        <div className='col card big-box'>
            <div className='card-body'>
            <div className='name-box'>
                <h3>{this.props.receipt.person}</h3>
            </div>
            <div className='order-box'>
                <h3>
                    <span>Main:</span>
                    {this.props.receipt.order.main}
                    <p>Toppings:</p>
                    <ul className="list-group list-group-flush">
                        {
                            this.props.receipt.order.toppings.map(
                                (topping) => {
                                return <li className='list-group-item'>{topping}</li>
                                }
                            )
                        }

                    </ul>
                </h3>
                <h3>
                    <span>Protein:</span>
                    {this.props.receipt.order.protein}
                </h3>
                <h3>
                    <span>Rice:</span>
                    {this.props.receipt.order.rice}
                </h3>
                <h3>
                    <span>Sauce:</span>
                    {this.props.receipt.order.sauce}
                </h3>
                <h3>
                    <span>Drinks:</span>
                    {this.props.receipt.order.drink}
                </h3>
                <h3>
                    <span>Cost:</span>
                    {this.props.receipt.order.cost}
                </h3>
                <h3>
                    <span>Is Bill Paid?</span><br></br>
                    {this.props.checkBill(this.state.bool, this.state.cost)}
                </h3>

            </div>
            </div>
        </div>
      )
  }

}



  class App extends React.Component {
    state = {
       receipt1,
       receipt2,
       receipt3
    }
    checkPayment = (bool, cost) => {
        if (bool === false) {
            return (
                <span>You owe ${cost}
                <button>Pay Bill</button>
                </span>
            )
        } else {
            return <span>Thank You
                <button>Leave Yelp Review</button>
                    </span>
        }
    }
    render() {
      return (
        <div className='container'>
            <div className='row'>
                <h2>Reciepts </h2>
            </div>
            <div className='row'>
                <Karolin receipt={this.state.receipt1} checkBill={this.checkPayment}/>
               <Jerrica receipt={this.state.receipt2} checkBill={this.checkPayment}/>
               <Matt receipt={this.state.receipt3} checkBill={this.checkPayment}/>
            </div>
               
        </div>
      )
  }

}



ReactDOM.render(
    <App />,
    document.querySelector('main')
);
