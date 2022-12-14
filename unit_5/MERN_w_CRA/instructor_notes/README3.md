[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

## Delete

Since our data is rendered all the way down in the Notice component but state is all the way up in the App, we should build out the functionality of delete up in app and pass down the functionality.

We also need to be sure we delete our data before updating state. the function `this.setState` will allow us to do this by using a callback. We have to be sure to return an object that is our updated state.

**App.js**

```js
handleDelete = deletedNotice => {
  axios
    .delete(`/notices/${deletedNotice.id}`)
    .then(() => {
      this.setState(state => {
        const notices = state.notices.filter(
          (notice, index) => notice.id !== deletedNotice.id
        )
        return { notices }
      })
    })
    .catch(error => console.log(error))
}

```

##### Pass it down

A nice thing to do (but not necessary) is to pull out our values out of props. This makes reading the code easier (see on one line what we are using/what we should have) and then it also shortens our code - again making it a little more readable.

**Main.js**

```js
function Main(props) {
  const { notices, handleDelete } = props
  return (
    <main>
      <Notices notices={notices} handleDelete={handleDelete}/>
    </main>
  )
}
```

Pass it down
**Notices.js**

```js
function Notices(props) {
  const { notices, handleDelete } = props
  return (
    <div>
      {notices.map(notice => (
        <Notice key={notice.id} notice={notice} handleDelete={handleDelete} />
      ))}
    </div>
  )
}
```

**Notice.js**

```js
function Notice(props) {
  const { notice, handleDelete } = props
  return (
    <div className="notice">
      <h3>{notice.title}</h3>
      <p>{notice.author}</p>
      <small>{notice.phone}</small>
      <button onClick={() => handleDelete(notice)}>X</button>
    </div>
  )
}
```
