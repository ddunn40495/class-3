import React from "react";


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

export default Matt