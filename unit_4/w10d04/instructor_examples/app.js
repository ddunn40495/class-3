// const formatUser = (user) => {
//     return user + "!!";
// }
// const user = "Matt";
// const myJSX = <section>
//         <h1 className="foo">Hello, {formatUser(user)}!</h1>
//         Welcome to the app
//     </section>;

// class Dog extends React.Component {
//     render = () => {
//         return <h2>woof</h2>
//     }
// }

// const name = 'Matt';
// const result = (name === 'Matt') ? <h1>foo</h1> : 'less than awesome';
// let result;
// if(name === 'Matt'){
//     result = 'awesome';
// } else {
//     result = 'less than awesome';
// }

// console.log(result);

// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry'];
//
// // iceCreams.forEach((flavor) => {
// //     console.log(flavor);
// // })
//
// const results = iceCreams.map(
//     (flavor) => {
//         return <em>flavor</em>;
//     }
// )

// console.log(results);

class App extends React.Component {
    state = {
        name: "World"
    }
    changeName = (event) => {
        this.setState({
            name:event.target.value
        })
    }
    render = () => {
        const fruits = ['apple', 'pear', 'mango'];
        const isAdmin = false;
        return <div>
            <h1>Hello, {this.state.name}!</h1>
            { (isAdmin) ? <em>You are an admin</em> : null }
            <input type="text" onKeyUp={this.changeName} />

            <ul>
                {
                    fruits.map(
                        (fruit, index) => {
                            return <li key={index}>{fruit}</li>
                        }
                    )
                }
            </ul>

        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)

// class Cat {
//     jump(){
//         console.log('jumping');
//     }
//     meow(){
//         console.log('meow');
//     }
// }
//
// class Lion extends Cat {
//     meow(){
//         console.log('roaar');
//     }
// }
//
// const newLion = new Lion();
// newLion.jump();
