class CreateForm extends React.Component {
    createPerson = (event) => {
        event.preventDefault();
        axios.post(
            '/people',
            {
                name:this.state.newPersonName,
                age:this.state.newPersonAge
            }
        ).then(
            (response) => {
                this.props.createCallback(response.data);
            }
        )
    }

    changeNewPersonName = (event) => {
        this.setState({
            newPersonName:event.target.value
        })
    }

    changeNewPersonAge = (event) => {
        this.setState({
            newPersonAge:event.target.value
        })
    }

    render = () => {
        return <div>
            <h2>Create Person</h2>
            <form onSubmit={this.createPerson}>
                <input onKeyUp={this.changeNewPersonName} type="text" placeholder="name" /><br/>
                <input onKeyUp={this.changeNewPersonAge} type="number" placeholder="age" /><br/>
                <input type="submit" value="Create Person"/>
            </form>
        </div>
    }
}
