# Optional Ideas

## Multiple Components In Separate Files:

You can break a single JS file containing multiple components into multiple files, each containing a single component:

`app.js`:

```javascript
class App extends React.Component {
    render = () => {
        return <div>
            <Greeting></Greeting>
            <div>Welcome to the app</div>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
```

`greeting.js`:

```javascript
class Greeting extends React.Component {
    render = () => {
        return <h1>Hello!</h1>
    }
}
```

Make sure to add additional `script` tags for each component above tags to those files that depend on them

Since the `<App>` component in `app.js` uses the `<Greeting>` component defined in `greeting.js`, `greeting.js` needs to come first, so that it's defined by the time `app.js` runs

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type="text/babel" src="greeting.js" charset="utf-8"></script>
        <script type="text/babel" src="app.js" charset="utf-8"></script>
    </head>
    <body>
        <main></main>
    </body>
</html>
```

## Functional Components

If you're not using state, you can use a function instead of a class to define a component:

```javascript
const Greeting => (props) {
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
  <Greeting name="Sara"></Greeting>,
  document.getElementById('main')
);
```
