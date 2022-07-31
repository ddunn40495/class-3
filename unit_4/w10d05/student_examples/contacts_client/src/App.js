import React from "react";
import axios from "axios";
import Aside from "./components/Aside.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";

class App extends React.Component {
  state = {
    people: [],
  };

  componentDidMount = () => {
    this.getPeople();
  };
  getPeople = () => {
    axios
      .get("http://test.local/people")
      .then(
        (response) => this.setState({ people: response.data }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  handleAdd = (event, formInputs) => {
    axios
      .post("/people", formInputs)
      .then(
        (response) => this.setState({ people: response.data }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  handleDelete = (deletedPerson) => {
    axios
      .delete(`/people/${deletedPerson.id}`)
      .then(
        () => {
          this.setState((state) => {
            const people = state.people.filter(
              (notice, index) => notice.id !== deletedPerson.id
            );
            return { people };
          });
        },
        (err) => console.error(err)
      )
      .catch((error) => console.log(error));
  };
  handleUpdate = (event, formInputs) => {};
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <Aside handleSubmit={this.handleAdd} />
          <Main
            people={this.state.people}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
