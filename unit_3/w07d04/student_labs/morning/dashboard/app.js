
class SideNav extends React.Component {
    state = {
        revNum: 1281
    }
    showReviews = () => {
        alert(revNum)
    }
    render() { 
        return ( 
            <nav>
                <ul>
                    <li><a href="#">Dashborad</a></li>
                    <li><a href="#">Widget</a></li>
                    <li><a onClick={this.showReviews} href="#">Reviews</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Online</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
         )
    }
}
 


class AverageRate extends React.Component {
    state = { revNum: 1281, stars: 5892, sum: null }
    getAverage = () => {
        let rating = this.state.stars / this.state.revNum
       this.setState({
           
           sum: rating.toFixed(1)
       })
    }
    render() { 
        return ( 
            <div>
                
                <h3>Average rating</h3>
                <button onClick={this.getAverage}>Get average</button>
                <p>{this.state.sum}</p>
                    
            </div>
         );
    }
}
 


class Reviews extends React.Component {
    state = {
        revNum: 1281
     }
    render() { 
        return (
            <div>
                <h1>Reviews</h1>
                <div>
                    <h3 className="rev-num">{this.state.revNum}</h3>
                </div>
            </div>
            
         );
    }
}
 












class App extends React.Component {
    render() {
      return (
        <div className='container'>
            
            
                <aside className='item-1'>
                    <SideNav />
                </aside>
                <div className='item-2'>
                    <Reviews />
                </div>
                <div className='item-3'>
                    <AverageRate />
                </div>
                <div className='item-4'>
                    
                </div>
                <div className='item-5'> 
                    
                </div>
            
               
        </div>
      )
  }

}



ReactDOM.render(
    <App />,
    document.querySelector('main')
);
