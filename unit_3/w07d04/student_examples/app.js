const name = 'Matt';
const result = (name === 'Matt') ? 'awesome!' : 'less than awesome';
console.log(result);







class App extends React.Component {
    state = {
        movie: {}

    }
    changeName = (event) => {

        this.setState({
            name: event.target.value
        })
    }
     findMovie = (event) => {
        event.preventDefault()
        axios.get('http://www.omdbapi.com/?apikey=53aa2cd6&t=' + this.state.name).then(
            (response) => {
                this.setState({
                    movie: response.data
                })
            }
        )
        
    }
    render = () => {
       
        return (
            <div>
        <form onSubmit={this.findMovie}>
                <input type="text" onKeyUp={this.changeName} />
                <input type="submit" value="Find Movie" />
            </form>
            <dl>
                <dt>Title</dt>
                <dd>{this.state.movie.Title}</dd>

                <dt>Year</dt>
                <dd>{this.state.movie.Year}</dd>

                <dt>Rating</dt>
                <dd>{this.state.movie.Rated}</dd>
            </dl>
            </div>
        )
    }
}











ReactDOM.render( <
    App / > ,
    document.querySelector('main')
);




// const formatUser = (user) => {
//     return user + " Ryan" + " #2"
// }


// const user = 'Matt'



// class Dog extends React.Component {
//     render = () => {
//         return <h2>woof</h2>
//     }
// }


