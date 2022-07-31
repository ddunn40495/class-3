# Intermediate React

## Conditionally render HTML

Remember ternary operators?

```javascript
const name = 'Matt';
const result = (name === 'Matt') ? 'awesome!' : 'less than awesome';
console.log(result);
```

The above logs 'awesome!' if `name` is set to 'Matt'.  Otherwise it will log 'less than awesome'

Depending on some condition, you may want to render different HTML:

```javascript
render = () => {
    const isAdmin = true;
    return <div>
        <h1>Hello, {this.state.name}!</h1>
        { (isAdmin) ? <em>You are an admin</em> : null }
        <input type="text" onKeyUp={this.changeName} />
    </div>;
}
```

This is the react way to do the following:

```javascript
if(isAdmin){
    return <em>You are an admin</em>
} else {
    return null
}
```

## Create multiple elements from an array

Remember `somearray.map()`?

```javascript
const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry'];

const results = iceCreams.map(
    (flavor) => {
        return flavor + ' ice cream'
    }
)

console.log(results);
```

The above code will log the following array: `['Vanilla ice cream', 'Chocolate ice cream', 'Strawberry ice cream']`

If we have an array of values, we can generate JSX elements from it:

```javascript
render = () => {
    const isAdmin = true;    
    const fruits = ['apple', 'pear', 'mango'];
    return <div>
        <h1>Hello, {this.state.name}!</h1>
        { (isAdmin) ? <em>You are an admin</em> : null }
        <input type="text" onKeyUp={this.changeName} />
        <ul>
            {
                fruits.map(
                    (fruit) => {
                        return <li>{fruit}</li>
                    }
                )
            }
        </ul>
    </div>;
}
```

Here the `.map` will change each string into an `li` element.

## Make AJAX requests within React

Let's make an AJAX request to OMDB and insert its data into the DOM.

```javascript
class App extends React.Component {
    state = {
        movie: {} //we'll need to set this initially to avoid errors
    }
    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    findMovie = (event) => {
        event.preventDefault()
        axios.get('http://www.omdbapi.com/?apikey=53aa2cd6&t=' + this.state.name).then(
            (response) => {
                this.setState({
                    movie: response.data
                })
            }
        )
    }
    render = () => {
        return <div>
            <form onSubmit={this.findMovie}>
                <input type="text" onKeyUp={this.changeName} />
                <input type="submit" value="Find Movie" />
            </form>
            <dl>
                <dt>Title</dt>
                <dd>{this.state.movie.Title}</dd>

                <dt>Year</dt>
                <dd>{this.state.movie.Year}</dd>

                <dt>Rating</dt>
                <dd>{this.state.movie.Rated}</dd>
            </dl>
        </div>;
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
```

## Nested Components

As your app gets larger, it will be difficult to keep all your code in one component.  Let's move the `<dl>` into its own component


```javascript
//put this above the App component
class Movie extends React.Component {
    render = () => {
        return <dl>
            <dt>Title</dt>
            <dd></dd>

            <dt>Year</dt>
            <dd></dd>

            <dt>Rating</dt>
            <dd></dd>
        </dl>
    }
}
```

update our render feature (make sure `Movie` is defined before `App`):

```javascript
render = () => {
    return <div>
        <form onSubmit={this.findMovie}>
            <input type="text" onKeyUp={this.changeName} />
            <input type="submit" value="Find Movie" />
        </form>
        <Movie></Movie>
    </div>;
}
```

you can use custom attributes called `props` to customize a component:

```html
<Movie title="Frozen" year="2011" rating="PG"></Movie>
```

inside our `Movie` component we can access those `props` using the `this.props` object:

```html
<dl>
    <dt>Title</dt>
    <dd>{this.props.title}</dd>

    <dt>Year</dt>
    <dd>{this.props.year}</dd>

    <dt>Rating</dt>
    <dd>{this.props.rating}</dd>
</dl>
```

Now we can use `App`'s state in conjunction with these props:

```html
<Movie title={this.state.movie.Title} year={this.state.movie.Year} rating={this.state.movie.Rated}></Movie>
```
