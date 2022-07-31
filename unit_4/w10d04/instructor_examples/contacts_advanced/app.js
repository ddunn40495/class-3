class App extends React.Component {
    state = {
        people: []
    }

    componentDidMount = () => {
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

    updatePeople = (allPeople) => {
        this.setState(
            {
                people:allPeople
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
                                <UpdateForm
                                    updateCallback={this.updatePeople}
                                    person={person}>
                                </UpdateForm>
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
