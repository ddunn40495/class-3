// const formatUser = (user) => {
//     return user + '!!'
// }
// const user = "Matt";
//
// const myJSX = <section>
//         {/* this is a comment */}
//         <h1>Hello, {formatUser(user)}!</h1>
//         Welcome to the app
//     </section>;

// ReactDOM.render(
//     myJSX,
//     document.querySelector('main')
// )

// class Car {
//     drive = () => {
//         console.log('vroom');
//     }
// }
//
// class Humvee extends Car {
//     blastRadio = () => {
//         console.log('Welcome to the jungle!!');
//     }
// }
//
// const myCar = new Car();
// myCar.drive();
//
//
// const myCar2 = new Humvee();
// myCar2.drive();
// myCar2.blastRadio();

// class Dog extends React.Component {
//     render = () => {
//         return <h2>woof</h2>
//     }
// }
//
// class App extends React.Component {
//     render = () => {
//         return <div>
//             <h1>Hello, world!</h1>
//             <Dog></Dog>
//         </div>
//     }
// }

// const name = "bilbo";
// let result = (name === 'Matt') ? 'awesome': 'less than awesome';
//
// console.log(result);

const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry'];

const results = iceCreams.map(
    (flavor) => {
        return flavor + ' ice cream';
    }
);

console.log(results);

class App extends React.Component {
    state = {
        name:'World'
    }
    changeName = (event) => {
        this.setState({
            name:event.target.value
        })
    }
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
        </div>
    }
}

// $('input').on('keyUp', (event) => {
//     $(event.target).val();
// })

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
