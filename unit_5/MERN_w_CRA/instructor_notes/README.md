[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# FRONTEND Create React App Review + Genearal React stuff you might have seen 'in the wild'

Let's just use a backend on heroku to speed up our set up so we can focus on react!

For now, we are done with our API. Let's make a frontend that can interact with it.

![](https://i.imgur.com/zm4EeFX.png)

## &#x1F684; CREATE REACT APP

- We are going to make a separate _client_ server for our front end. It's not unusual to do so. Imagine a large company like facebook and all the data they manage. They have both a desktop app and a mobile app. These apps share the databases. It would be a lot of duplication to copy all the data over from the desktop to mobile and then update everything everywhere.

In the interest of time, we are going to start with some boilerplate code

- enter the `noticeboard_client folder`
- `npm install`

* `npm start` - this will eventually connect to a heroku app. Remember, free heroku apps fall asleep and can take a while to wake up, just be patient. Once its being used it should be more responsive.

## Create React App

Create React App does a few really nice things for us. It builds us a server that is tailored to our needs. It does 'hot-reloading' - every time we save we see our changes in the browser update. It also does testing for us and give us helpful messages in the browser console.

Like Heroku, Create React App is a bit magical and will handle a lot of things for us behind the scenes. As you continue to grow as developers, you can explore what the different parts of create react app are doing. For now, we'll focus on building something that interacts with our Heroku app.

![create react app file structure](https://i.imgur.com/bzf5feu.png)

Remember, we could use any frontend library or framework. (At least, one that can work with HTTP requests). But we'll stick with React

### React Setup

We'll work with a few files: They will be in the `src` folder. But mostly, we'll stay focused on App.js

Let's look at `App.js`

```js
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Notices</h1>
      </div>
    )
  }
}

export default App
```

Now let's customize our `App.js` to be for our app.

We'll render our different components inside our app:

```js
import React from 'react'
import axios from 'axios'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Nav from './components/Nav.js'

class App extends React.Component {
  state = {
    notices: []
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside />
          <Main notices={this.state.notices} />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
```

And that should do it!

We should see our Notices component render in the browser

We're also following the `Thinking in React` strategy encouraged in the docs. First build out the static components, then add functionality.

This layout is called the 'holy grail' - once super challenging to do, but with flexbox and grid it is so much simpler!

### React Axios

Let's make the AJAX request to our Heroku server to get data. The data will be an index of all the **notices**. With it, we can make a data-drive app.

We can use relative routes by adding a proxy to our `package.json` (mutliple proxies not yet available)

```js
{
  "name": "noticeboard_client",
  "version": "0.1.0",
  "proxy": "https://noticeboard-api-rails.herokuapp.com",
  "private": true,
```

NOTE: if you are getting a syntax error of `<` in JSON - try restarting your Create React app (control c then npm start again)

Make a request to the Heroku server and console log the response.

App.js

```javascript
class App extends React.Component {
  state = {
    notices: []
  }

  componentDidMount = () => {
    this.getNotices()
  }
  getNotices = () => {
    axios
      .get('/notices')
      .then(response => this.setState({ notices: response.data }))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside />
          <Main notices={this.state.notices} />
          <Nav />
          <Footer />
        </div>
      </div>
    )
}

export default Notices
```

If you get this:

![](https://i.imgur.com/l8VZfgv.png)

It means your Heroku server is not running.

If you get a response like this, then you have the expected CORS issue:

```
No 'Access-Control-Allow-Origin' header is present on the request resource.
```

![](https://i.imgur.com/jowW1st.png)

![](https://i.imgur.com/s2ruqcN.png)

> Otherwise, you should see your API data showing up in your browser console. This might happen if somehow your browser is ignoring the `same-origin policy` OR has `localhost:3000` cached already.
>
> Try emptying your cache and see what happens.

<br>
