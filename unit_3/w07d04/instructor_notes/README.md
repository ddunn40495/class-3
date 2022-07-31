# Intro to React

## Lesson Objectives

- Define what React is
- Describe how react differs from most other front-end frameworks
- Define JSX and use it
- Define and create components
- Handle user events
- Change the state of a component

## Define what React Is

React is a front-end framework which is designed to make building a Single Page JavaScript Application easier

## Describe how react differs from most other front-end frameworks

- Most other front-end frameworks attempt to separate data from presentation in some kind of an MVC structure
    - For example
        - One set files for HTML (View)
        - One set of files for your Controllers
        - One set of files for your Models (data)
    - Great for teams where developers specialize on one technology (CSS or JavaScript)
- React puts all the Views, Controllers, and Models for one small section of the application together into one file
    - Great for teams where one developer handles just a small section of the application and that's it

## Define/Use JSX

### Set up HTML Doc

Let's set up the HTML

```HTML
<!DOCTYPE html>
<html>
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
        <main></main>
    </body>
</html>
```

Let's talk about all those script tags

- react.development.js
    - The core React functionality
    - React can be used for applications that aren't in the browser
        - so it's separated out from code that deals with the browser
- react-dom.development.js
    - This allows the core React js to work with the browser's DOM
- browser.min.js (babel-core)
    - Babel is a transpiler that will translate ES6 code to ES5
    - it also handles turning JSX into regular JS
- axios.min.js
    - A simple library that makes AJAX easy
- **NOTE** you can't open your HTML file in the browser like normal
    - Use atom-live-server (https://atom.io/packages/atom-live-server) or...
    - Use `python -m SimpleHTTPServer` or `python -m http.server 8000` to start a basic server in the same directory as your HTML file.  It may run into caching issues, so hold down shift when refreshing


### JSX

- Let's create a component which is just an H1 tag
- We'll insert it into the `main` tag of our html

```JavaScript
ReactDOM.render(
  <h1 className="foo">Hello, world!</h1>,
  document.querySelector('main')
);
```

- This code will find the main tag and render an `h1` tag inside of it
    - **NOTE** we can't set class with the `class` attribute anymore
        - We have to use className so it doesn't get confused
        - All other attributes should work normally
- React mixes HTML with JavaScript (JSX)
    - Notice that the HTML does not have quotes or backticks around it

## Assign JSX to a variable

JSX just renders into regular JavaScript, so we can assign it to variable:

```JavaScript
const myJSX = <h1>Hello, World!</h1>

ReactDOM.render(
  myJSX,
  document.querySelector('main')
);
```

## Embed an expression into JSX

We can create variables and insert them into our JSX:

```JavaScript
const user = "Matt";
const myJSX = <h1>Hello, {user}!</h1>

ReactDOM.render(
  myJSX,
  document.querySelector('main')
);
```

We can even execute functions inside the `{}`

```JavaScript
const formatUser = (user) => {
    return user + "!!"
}
const user = "Matt";
const myJSX = <h1>Hello, {formatUser(user)}</h1>

ReactDOM.render(
  myJSX,
  document.querySelector('main')
);
```

## Create multi-line JSX variables

JSX can be split onto multiple lines:

```JavaScript
const formatUser = (user) => {
    return user + "!!"
}
const user = "Matt";
const myJSX =
    <section>
        <h1>Hello, {formatUser(user)}</h1>
        Welcome to the app
    </section>

ReactDOM.render(
  myJSX,
  document.querySelector('main')
);
```

## Create a custom component

With JSX, we can create our own tags!!

```JavaScript
class App extends React.Component {
    render = () => {
        return <h1>Hello, World!</h1>;
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
```

- This mimics what is going on with Web Components
- The idea is that we can write our own custom tags, which are much more semantic, and they will render as regular HTML

You can nest compents within each other:

```javascript
class Dog extends React.Component {
    render = () => {
        return <h2>woof</h2>
    }
}

class App extends React.Component {
    render = () => {
        return (
            <div>
                <h1>Hello, World!</h1>
                <Dog></Dog>
            </div>
        );
    }
}
```

## Handle user events

We can handle user events (clicks, hover, etc) by defining event handlers and registering them right on the element:

```javascript
const sayHello = () => {
    alert("oh hai");
}

class App extends React.Component {
    render = () => {
        return <h1 onClick={sayHello}>Hello, World!</h1>;
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
```

It's a little more component-y if we make these functions part of the component, though:

```javascript
class App extends React.Component {
    sayHello = () => {
        alert("oh hai");
    }    
    render = () => {
        return <h1 onClick={this.sayHello}>Hello, World!</h1>;
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
```

## Change a component's state through interaction

We want to interact with a component, and have it visually change.  To do this, we use the component's "state"

```javascript
class App extends React.Component {
    state = {
        name: "World"
    }    
    sayHello = () => {
        alert("oh hai");
    }    
    render = () => {
        return <h1 onClick={this.sayHello}>Hello, {this.state.name}!</h1>;
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
```

- `state` initializes the state of the app when the component loads
- We can view this variable anywhere in the DOM by using `{this.state.name}`

If we want to change the `name` property in response to a user interaction, you can adjust `sayHello`

```javascript
sayHello = () => {
    this.setState({
        name: "Matt"
    })
}    
```

`this.setState` changes the "state" of the component.  It changes the property called `name` and sets its value to "Matt"

`sayHello` isn't a great variable name.  Let's change it to `changeName`.  Don't forget to update in the `onClick` part of the HTML

```javascript
class App extends React.Component {
    state = {
        name: "World"
    }    
    changeName = () => {
        this.setState({
            name: "Matt"
        })
    }    
    render = () => {
        return <h1 onClick={this.changeName}>Hello, {this.state.name}!</h1>;
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
```

Let's switch to using an input so you can customize the name:

```javascript
class App extends React.Component {
    state = {
        name: "World"
    }    
    changeName = (event) => { //pass in event param
        this.setState({
            name: event.target.value //use event.target.value to change name prop on state
        })
    }    
    render = () => {
        // return one top level div
        // call changeName on key up of an input
        return <div>
            <h1>Hello, {this.state.name}!</h1>
            <input type="text" onKeyUp={this.changeName} />
        </div>;
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);

```

- you must return only one top level element, you can't return sibling elements.  I've enclosed everything in a `<div>`
- I changed `onClick` to `onKeyUp` to change the state property with each key stroke
- I pass an `event` param into `changeName`.  This is the same thing that we did with jQuery.  I use it to change the `name` property of the component's state.
