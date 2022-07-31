import React from "react";
import NewForm from "./components/NewForm";
import "./App.css";
import EditForm from "./components/EditForm";

let baseURL = "http://localhost:3004";

console.log("current base URL:", baseURL);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: [],
    };
    this.getBirds = this.getBirds.bind(this);

    this.handleAddBird = this.handleAddBird.bind(this);
  }
  handleAddBird(bird) {
    console.log(bird);
    this.setState({
      birds: bird,
    });
  }
  deleteBird = (id) => {
    fetch(baseURL + "/birds/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.birds.findIndex((bird) => bird._id === id);
      const copyBirds = [...this.state.birds];
      copyBirds.splice(findIndex, 1);
      this.setState({ birds: copyBirds });
    });
  };
  updateBird = (event) => {
    event.preventDefault();
    const id = event.target.id;
    put("/birds/" + id, this.state).then((response) => {
      this.setState({
        birds: response.data,
        name: "",
        img: "",
      });
    });
  };
  getBirds() {
    fetch(baseURL + "/birds")
      .then(
        (data) => {
          return data.json();
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => this.setState({ birds: parsedData }),
        (err) => console.log(err)
      );
  }
  componentDidMount() {
    this.getBirds();
  }
  render() {
    return (
      <div>
        <h3>Birds</h3>
        <ul>
          {this.state.birds.map((bird) => {
            return (
              <li key={bird._id}>
                {bird.name}
                <button value={bird._id} onClick={this.deleteBird}>
                  DELETE
                </button>
              </li>
            );
          })}
          <NewForm baseUrl={baseURL} addBird={this.handleAddBird} />
          <EditForm editBird={} />
        </ul>
      </div>
    );
  }
}

export default App;
