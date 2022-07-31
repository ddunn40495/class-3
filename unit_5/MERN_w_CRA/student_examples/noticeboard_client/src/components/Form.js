import React, { Component } from 'react'
import Input from './Input.js'

class Form extends Component {
  // older syntax
  // must pass props as argument
  // must call super(props)

  constructor(props) {
    super(props)
    // form values, skipping this will give an error warning about
    // component changing uncontrolled input
    this.state = {
      title: '',
      author: '',
      phone: ''
    }
    // must bind all functions
    // all functions must be func () {}
    // not func = () => {}
    // in order to reduce headaches
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // use some logic to determine if the form should be pre-filled for update
  // or if it should be empty for new, depending on where the form is rendered/whether data was passed in
  componentDidMount() {
    if (this.props.notice) {
      this.setState({
        title: this.props.notice.title,
        author: this.props.notice.author,
        phone: this.props.notice.phone,
        id: this.props.notice.id
      })
    }
  }
  // will change all the values of each input, rather than having to write a function for each one
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  // explicity show what is being passed in
  // this function will get lifted all the way up back to the app component, that will allow the main list to update after this function is completed
  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(event, {
      title: this.state.title,
      author: this.state.author,
      phone: this.state.phone,
      id: this.state.id
    })
    // clears the form
    this.setState({
      title: '',
      author: '',
      phone: ''
    })
    // if this is the edit form, change the view back
    if (this.props.notice) {
      this.props.toggleForm()
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={'title'}
          placeholder={'Notice Title'}
          type={'text'}
          value={this.state.title}
          id={'title'}
        />
        <Input
          handleChange={this.handleChange}
          name={'author'}
          placeholder={'Notice Author'}
          type={'text'}
          value={this.state.author}
          id={'author'}
        />
        <Input
          handleChange={this.handleChange}
          name={'phone'}
          placeholder={'Notice Phone'}
          type={'text'}
          value={this.state.phone}
          id={'phone'}
        />
        <input
          type="submit"
          value={this.props.notice ? 'update this notice' : 'add a notice'}
        />
        {this.props.children}
      </form>
    )
  }
}

export default Form
