class App extends React.Component {
    state = {
        people: []
    }

    componentDidMount = () => {
        this.updatePeople();
    }

    changeUpdatePersonName = (event) => {
        this.setState({
            updatePersonName:event.target.value
        })
    }

    changeUpdatePersonAge = (event) => {
        this.setState({
            updatePersonAge:event.target.value
        })
    }

    deletePerson = (event) => {
        axios.delete('/people/' + event.target.value).then(
            (response) => {
                this.setState(
                    {
                        people:response.data
                    }
                )
            }
        )
    }

    updatePerson = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/people/'+id,
            {
                name:this.state.updatePersonName,
                age:this.state.updatePersonAge
            }
        ).then(
            (response) => {
                this.setState(
                    {
                        people:response.data
                    }
                )
            }
        )
    }

    updatePeople = () => {
        axios.get('/people').then(
            (response) => {
                this.setState(
                    {
                        people:response.data
                    }
                )
            }
        )
    }

    render = () => {
        return <div>
            <CreateForm createCallback={this.updatePeople}></CreateForm>
            <h2>List of People</h2>
            <ul>
                {
                    this.state.people.map(
                        (person) => {
                            return <li>
                                {person.name}: {person.age}
                                <button value={person.id} onClick={this.deletePerson}>
                                    Delete
                                </button>
                                <form id={person.id} onSubmit={this.updatePerson}>
                                    <input onKeyUp={this.changeUpdatePersonName} type="text" placeholder="name" /><br/>
                                    <input onKeyUp={this.changeUpdatePersonAge} type="number" placeholder="age" /><br/>
                                    <input type="submit" value="Update Person" />
                                </form>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    }
}

// const App = (props) => {
//     return <h2>Functional {props.name}!</h2>
// }

ReactDOM.render(
    <App></App>,
    document.querySelector('main')

)
