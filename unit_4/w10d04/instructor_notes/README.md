# Integrating React with a Custom PHP API

## Add HTML

Create `index.html` in the root of your PHP api directory

```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type="text/babel" src="app.js" charset="utf-8"></script>
    </head>
    <body>
        <h1>People CRUD App</h1>
        <main></main>
    </body>
</html>
```

## Create App Component

Create `app.js` in the root of your PHP api directory

```javascript
class App extends React.Component {
    render = () => {
        return <div>
            <h2>Create Person</h2>
            <form>
                <input type="text" placeholder="name"/><br/>
                <input type="number" placeholder="age"/><br/>
                <input type="submit" value="Create Person"/>
            </form>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
```

## Add Event Handlers

Create submit handler for `<form>` and keyUp handler for text/number `<input>` tags

```HTML
<form onSubmit={this.createPerson}>
    <input onKeyUp={this.changeNewPersonName} type="text" placeholder="name"/><br/>
    <input onKeyUp={this.changeNewPersonAge} type="number" placeholder="age"/><br/>
    <input type="submit" value="Create Person"/>
</form>
```

add the following methods

```javascript
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

createPerson = (event) => {
    event.preventDefault();
    console.log(this.state);
}
```

## POST Data to API

```javascript
createPerson = (event) => {
    event.preventDefault();
    axios.post(
        '/people',
        {
            name:this.state.newPersonName,
            age: this.state.newPersonAge,
        }
    ).then(
        (response) => {
            console.log(response);
        }
    )
}
```

We can use the response to populate the DOM.  First initialize a people state property inside your App component:

```javascript
state = {
    people: []
}
```

Use that to generate `<li>` elements:

```html
<h2>List of People</h2>
<ul>
    {
        this.state.people.map(
            (person) => {
                return <li>
                    {person.name}: {person.age}
                </li>
            }
        )
    }
</ul>
```

When we get a response from our POST request, use the data to populate the DOM:

```javascript
axios.post(
    '/people',
    {
        name:this.state.newPersonName,
        age: this.state.newPersonAge,
    }
).then(
    (response) => {
        this.setState({
            people: response.data
        })
    }
)
```

## Populate People on Page Load

`componentDidMount` is a function like `render` that exists for all React components.  It's called when the component is loaded into the DOM.  We can use that to get data from `/people` and update state:

```javascript
componentDidMount = () => {
    axios.get('/people').then(
        (response) => {
            this.setState({
                people: response.data
            }
        )
    })
}
```

## Add Delete Functionality

Add a button for deletion with an `onClick` handler and a normal HTML value attribute set to the person's id

```javascript
this.state.people.map(
    (person) => {
        return <li>
            {person.name}: {person.age}
            <button value={person.id} onClick={this.deletePerson}>
                DELETE
            </button>
        </li>
    }
)
```

Add `deletePerson` function:

```javascript
deletePerson = (event) => {
    axios.delete('/people/' + event.target.value).then(
        (response) => {
            this.setState(
                {
                    people: response.data
                }
            )
        }
    )
}

```

## Update Functionality

Add a form to the end of the `<li>` for people:

```html
<form id={person.id} onSubmit={this.updatePerson}>
    <input onKeyUp={this.changeUpdatePersonName} type="text" placeholder="name"/><br/>
    <input onKeyUp={this.changeUpdatePersonAge} type="number" placeholder="age"/><br/>
    <input type="submit" value="Update Person"/>
</form>
```

Note we've added an `id` to the form, this could be any attribute, pretty much.  `id` just makes it easier.

Add methods for `changeUpdatePersonName` and `changeUpdatePersonAge`:

```javascript
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

updatePerson = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put(
        '/people/' + id,
        {
            name:this.state.updatePersonName,
            age: this.state.updatePersonAge,
        }
    )
    .then((response) => {
        this.setState({
            people: response.data
        })
    })
}
```
