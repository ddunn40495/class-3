// console.log('birds')

class App extends React.Component {
  state = {
    name: '',
    img: '',
    birds: []
  }

  componentDidMount = () => {
    axios
      .get('/birds')
      .then((response) => {
        this.setState({
          birds: response.data
        })
      })
  }
  deleteBird = (event) => {
    axios
      .delete('/birds/' + event.target.value)
      .then(response => this.setState({birds: response.data}))
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    axios
      .post('/birds', this.state)
      .then(response => this.setState(
        { name: '',
          img: '',
          birds: response.data
        })
      )
  }
  updateBird = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
      .put('/birds/' + id, this.state)
      .then(response => {
        this.setState({
          birds: response.data,
          name: '',
          img: ''
        })
      })
  }
  render = () => {
    return (
      <div>
        <h2>Create Bird</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" onChange={this.handleChange} type="text" />
          <br />
          <label htmlFor="img">Image</label>
          <br />
          <input id="img" type="text" onChange={this.handleChange} />
          <br />
          <input type="submit" value="Create Bird" />
        </form>
        <h3>List of Bird Sightings</h3>
        <ul>
        { this.state.birds.map(bird => { return (
          <li key={bird._id}>
            {bird.name}<br />
            <img src={bird.img} alt={bird.name}/>
            <button
              value={bird._id}
              onClick={this.deleteBird}
            >DELETE
            </button>
            <details><summary>Edit this bird</summary>
              <form onSubmit={this.updateBird} id={bird._id}>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="img">Image</label>
                <br />
                <input
                  type="text"
                  id="img"
                  onChange={this.handleChange}
                />
                <br />
                <input type="submit" value="Update Bird" />
              </form>
            </details>
          </li>
        )})}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('main'))
