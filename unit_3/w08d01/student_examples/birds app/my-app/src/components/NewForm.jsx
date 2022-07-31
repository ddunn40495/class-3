import React from "react";

class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
    console.log(event.currentTarget.id);
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch(this.props.baseUrl + "/birds", {
      method: "POST",
      body: JSON.stringify({ name: this.state.name }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.props.addBird(data);
        this.setState({
          name: "",
        });
      });
  }
  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label htmlFor='name'>Name</label>
        <br />
        <input
          type='text'
          id='name'
          onChange={(event) => this.handleChange(event)}
          value={this.state.name}
        />
        <br />
        <label htmlFor='img'>Image</label>
        <br />
        <input
          type='text'
          id='img'
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        <input type='submit' value='Create Bird' />
      </form>
    );
  }
}

export default NewForm;
