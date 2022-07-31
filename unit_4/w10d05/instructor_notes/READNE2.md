[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

## Delete

Since our data is rendered all the way down in the Person component but state is all the way up in the App, we should build out the functionality of delete up in app and pass down the functionality.

We also need to be sure we delete our data before updating state. the function `this.setState` will allow us to do this by using a callback. We have to be sure to return an object that is our updated state.

**App.js**

```js
handleDelete = deletedPerson => {
  axios
    .delete(`/people/${deletedPerson.id}`)
    .then(
      () => {
        this.setState(state => {
          const people = state.people.filter(
            (person, index) => person.id !== deletedPerson.id
          )
          return { people }
        })
      },
      err => console.error(err)
    )
    .catch(error => console.log(error))
}
```

##### Pass it down

A nice thing to do (but not necessary) is to pull out our values out of props. This makes reading the code easier (see on one line what we are using/what we should have) and then it also shortens our code - again making it a little more readable.

**Main.js**

```js
function Main(props) {
  const { people, handleDelete, handleUpdate } = props
  return (
    <main>
      <People
        people={people}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  )
}
```

Pass it down
**People.js**

```js
export default function People(props) {
  const { people, handleDelete, handleUpdate } = props
  return (
    <div>
      {people.map(person => (
        <Person
          key={person.id}
          person={person}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  )
}
```

**Person.js**

```js
function Person(props) {
  const { person, handleDelete } = props
  return (
    <div className="person">
      <h3>
        <span> {person.name}</span> <span>{person.age}</span>
      </h3>
      <div className="person-actions">
        <button onClick={this.toggleForm}>Edit</button>
        <button className="delete-button" onClick={() => handleDelete(person)}>
          X
        </button>
      </div>
    </div>
  )
}
```

## Update

Add the functionality in App.js and pass it down

```js
handleUpdate = (event, formInputs) => {
  event.preventDefault()
  axios
    .put(`/people/${formInputs.id}`, formInputs)
    .then(
      () => {
        this.getPeople()
      },
      err => console.error(err)
    )
    .catch(error => console.error(error))
}
// ....
;<Main
  people={this.state.people}
  handleDelete={this.handleDelete}
  handleUpdate={this.handleUpdate}
/>
```

Pass it down to People, and then again down to Person... this is called props drilling - a little is ok, but a lot might mean you need to look into other strategies.

### Strategy for Edit functionality:

Replace `card` with our form (let's reuse our form it for create and update) by clicking an edit button.

Replace form with card also on button click.

Where does state for this go?

The data belongs all the way in app but what we should be displaying should be the state of the Person component.

Let's start with the Person component.

Since it will need to have state, let's convert it to a class

```js
import React, {Component} from 'react'
import Form from './Form.js'

class Person extends Component {
  state = {
    formVisible: false
  }

```

and

```js
render() {
  const { person, handleDelete, handleUpdate } = this.props
  return (
    <>
    <div className="person">
      <h3>
        <span> {person.name}</span> <span>{person.age}</span>
      </h3>
      <div className="person-actions">
        <button onClick={this.toggleForm}>Edit</button>
        <button
          className="delete-button"
          onClick={() => handleDelete(person)}
        >
          X
        </button>
      </div>
    </div>
      )}
    </>
  )
}
```

Import our Form

```js
import Form from './Form.js'
```

Write a function to toggle the form view

```js
toggleForm = () => this.setState({ formVisible: !this.state.formVisible })
```

Add a ternary operator to change our view based on state

```js
render () {
  const {person, handleDelete, handleUpdate} = this.props
  return(
    <>
      {this.state.formVisible ? (
        <Form
          person={person}
          handleSubmit={handleUpdate}
          toggleForm={this.toggleForm}
        >
          <button onClick={this.toggleForm}>Nevermind!</button>
        </Form>
      ) : (
        <div className="person">
          <h3>
            <span> {person.name}</span> <span>{person.age}</span>
          </h3>
          <div className="person-actions">
            <button onClick={this.toggleForm}>Edit</button>
            <button
              className="delete-button"
              onClick={() => handleDelete(person)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
   )
}
```

Let's pass down our person into our Form

```js
<Form person={person} />
```

Let's write some logic that if there are props, let's populate the form with the person to edit.

**Form.js**

We'll also need to grab the id for our route, even though it never goes in as part of an input field

```js
componentDidMount() {
  if (this.props.person) {
    this.setState({
      name: this.props.person.name,
      age: this.props.person.age,
      id: this.props.person.id
    })
  }
}
```

## Extra

- use 'links' (just demoed as `li` here) - mock rendering different 'pages' - you can use something like `React Router` that would handle the logic for you and also update the URL so you can send links to specific views of your react app

Check out that code in `nav`, `about`, `contact` and `dynamicComponent`
