## Update

Add the functionality in App.js and pass it down

```js
handleUpdate = (event, formInputs) => {
  event.preventDefault()
  axios
    .put(`/notices/${formInputs.id}`, formInputs)
    .then(() => {
      this.getNotices()
    })
    .catch(error => console.error(error))
}
// ....

<Main
  notices={this.state.notices}
  handleDelete={this.handleDelete}
  handleUpdate={this.handleUpdate}
/>
```

Pass it down to Notices, and then again down to Notice... this is called props drilling - a little is ok, but a lot might mean you need to look into other strategies.

### Strategy for Edit functionality:

Replace `card` with our form (let's reuse our form it for create and update) by clicking an edit button.

Replace form with card also on button click.

Where does state for this go?

The data belongs all the way in app but what we should be displaying should be the state of the Notice component.

Let's start with the Notice component.

Since it will need to have state, let's convert it to a class

```js
import React, {Component} from 'react'
import Form from './Form.js'

class Notice extends Component {
  state = {
    formVisible: false
  }

```

and

```js
render() {
  const { notice, handleDelete, handleUpdate } = this.props
  return (
    <>
        <div className="notice">
          <h3>{notice.title}</h3>
          <p>{notice.author}</p>
          <div className="notice-actions">
            <small>{notice.phone}</small>
            <button
              className="delete-button"
              onClick={() => handleDelete(notice)}
            >
              X
            </button>
            <button onClick={this.toggleForm}>Edit this notice</button>
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
  const {notice, handleDelete, handleUpdate} = this.props
  return(
    <>
    {this.state.formVisible ? (
      <Form
        notice={notice}
        handleSubmit={handleUpdate}
        toggleForm={this.toggleForm}
      >
        <button onClick={this.toggleForm}>Nevermind!</button>
      </Form>
    ) : (
      <div className="notice">
        <h3>{notice.title}</h3>
        <p>{notice.author}</p>
        <div className="notice-actions">
          <small>{notice.phone}</small>
          <button
            className="delete-button"
            onClick={() => handleDelete(notice)}
          >
            X
          </button>
          <button onClick={this.toggleForm}>Edit this notice</button>
        </div>
      </div>
    )}
     </>
   )
}
```

Let's pass down our notice into our Form

```js
<Form notice={notice} />
```

Let's write some logic that if there are props, let's populate the form with the notice to edit.

**Form.js**

We'll also need to grab the id for our route, even though it never goes in as part of an input field

```js
componentDidMount() {
  if (this.props.notice) {
    this.setState({
      title: this.props.notice.title,
      author: this.props.notice.author,
      phone: this.props.notice.phone,
      id: this.props.notice.id
    })
  }
}
```

Let's write our update function in App and send it down

```js
handleUpdate (event, formInputs) {
  handleUpdate = (event, formInputs) => {
    event.preventDefault()
    axios
      .put(`/notices/${formInputs.id}`, formInputs)
      .then(() => {
        this.getNotices()
      })
      .catch(error => console.error(error))
  }
```


Send it Down

**App.js**

```js
<Main
  notices={this.state.notices}
  handleDelete={this.handleDelete}
  handleUpdate={this.handleUpdate}
/>
```

Down

**Main.js**

```js
function Main(props) {
  const { notices, handleDelete, handleUpdate } = props
  return (
    <main>
      <Notices
        notices={notices}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  )
}
```

Down

**Notices.js**

```js
function Notices(props) {
  const { notices, handleDelete, handleUpdate } = props
  return (
    <div>
      {notices.map(notice => (
        <Notice
          key={notice.id}
          notice={notice}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  )
}
```

Down

**Notice.js**

Ah-ha! Why are we naming this one `handleSubmit`?

Also, we want to be able to exit out of this view if we change our mind about editing our entry. We don't want our create form to have a `nevermind` button. We can use `this.props.children` to pass text and html elements down to our components, that way we have even more ways to customize them.

```js
return(
  <>
  {this.state.formVisible
    ?   <Form
        notice={notice}
        handleSubmit={handleUpdate}
        toggleForm={this.toggleForm}
      >
        <button onClick={this.toggleForm}>Nevermind!</button>
      </Form>
    ...
```

**Notice.js**

```js
import React from 'react'
import Form from './Form.js'

class Notice extends React.Component {
  state = {
    formVisible: false
  }

  toggleForm = () => this.setState({ formVisible: !this.state.formVisible })

  render() {
    const { notice, handleDelete, handleUpdate } = this.props
    return (
      <>
        {this.state.formVisible ? (
          <Form
            notice={notice}
            handleSubmit={handleUpdate}
            toggleForm={this.toggleForm}
          >
            <button onClick={this.toggleForm}>Nevermind!</button>
          </Form>
        ) : (
          <div className="notice">
            <h3>{notice.title}</h3>
            <p>{notice.author}</p>
            <div className="notice-actions">
              <small>{notice.phone}</small>
              <button
                className="delete-button"
                onClick={() => handleDelete(notice)}
              >
                X
              </button>
              <button onClick={this.toggleForm}>Edit this notice</button>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Notice
```

**Form.js**

update the button text depending

```js
<input
  type="submit"
  value={this.props.notice ? 'update this notice' : 'add a notice'}
/>
```
