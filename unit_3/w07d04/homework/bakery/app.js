const tools = [
    {
        name: 'no-bake-pudding',
        price: 0,
        rate: 1
    },
    {
        name: 'easy-bake-oven',
        price: 5,
        rate: 5
    },
    {
        name: 'cheap-oven',
        price: 25,
        rate: 50
    },
    {
        name: 'nice-oven',
        price: 250,
        rate: 100
    },
    {
        name: 'factory',
        price: 500,
        rate: 250
    }

]


class EasyBake extends React.Component {
    state =  {
        name: 'easy-bake-oven',
        price: 5,
        rate: 5
    }

    render() {
      return (
        <div>
            <button onClick={
                () => {
                    
                    this.props.buy(1)
                }
                
            }>Buy EasyBake</button>
               
        </div>
      )
  }

}


class CheapOven extends React.Component {
    state =    {
        name: 'cheap-oven',
        price: 25,
        rate: 50
    }

    render() {
      return (
        <div>
            <button onClick={
                () => {
                    this.props.buy(2)
                }
            }>Buy Cheap Oven</button>
               
        </div>
      )
  }

}

class NiceOven extends React.Component {
    

    render() {
      return (
        <div>
            <button onClick={
                () => {
                    
                    this.props.buy(3)
                }
                
            }>Buy Nice Oven</button>
               
        </div>
      )
  }

}

class Factorys extends React.Component {
    

    render() {
      return (
        <div>
            <button onClick={
                () => {
                    
                    this.props.buy(4)
                }
                
            }>Buy Factory</button>
               
        </div>
      )
  }

}


class Status extends React.Component {
    
    render() {
      return (
        <div>
            <h1>You have this much money ${this.props.currentMoney}</h1>
      <h3> You are using {this.props.currentTool}</h3>
               
        </div>
      )
  }

}


class Work extends React.Component {
    
    render() {
      return (
        <div>
            <button onClick={
                () => {
                    this.props.work(this.props.currentToolIndex)
                }
            }>Work</button>
        </div>
      )
  }

}



class App extends React.Component {
    state = {
        money: 6,
        currentTool: tools[0].name,
        currentToolIndex: 0
    }
    checkWin = () => {
        if (this.state.money >= 1000) {
            alert('YOURE SUPER DUPER RICH GO PLAY GOLF ALL DAY')
        } else {
            
        }
    }
    brokeAlert = (param) => {
        alert(`You were trying to buy ${tools[param].name} but you are too broke for that. keep on working buddy`)
    }
    buyAlert = (param) => {
        alert(`you just got ${tools[param].name} to cook with you spent ${tools[param].price} dollars and now your balence is ${this.state.money} dollars `)
    }
     workAlert = () => {
        alert(`you have ${this.state.money} juiceboxs after a days worth of work `)
        this.checkWin
    }
    buyTool = (param) => {
        if (this.state.money >= tools[param].price) {
            
            this.setState({
                money: this.state.money - tools[param].price,
                currentToolIndex: param,
                currentTool: tools[param].name
                
            })
            setTimeout(this.buyAlert(param), 1000)
        } else {
            this.brokeAlert
        } 
        
        

    }
    workHard = () => {
        this.setState({
            money: this.state.money + tools[this.state.currentToolIndex].rate

        })
        setTimeout(this.workAlert, 1000)
    }
    
    render() {
      return (
        <div>
            <Work work={this.workHard} currentToolIndex={this.currentToolIndex}/>
            <Status currentMoney={this.state.money} currentTool={this.state.currentTool}/>
            <EasyBake buy={this.buyTool}/> 
            <CheapOven buy={this.buyTool} />
            <NiceOven buy={this.buyTool} />
            <Factorys buy={this.buyTool} />
            
        </div>
      )
  }

}



ReactDOM.render(
    <App />,
    document.querySelector('main')
);