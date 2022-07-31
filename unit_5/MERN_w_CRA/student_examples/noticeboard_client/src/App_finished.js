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

  componentDidMount = () => {
    this.getNotices()
  }
  getNotices = () => {
    axios
      .get('/notices')
      .then(response => this.setState({ notices: response.data }))
  }
  handleAdd = (event, formInputs) => {
    axios
      .post('/notices', formInputs)
      .then(jsonedNotice =>
        this.setState({ notices: [jsonedNotice.data, ...this.state.notices] })
      )
      .catch(error => console.error(error))
  }
  handleDelete = deletedNotice => {
    axios
      .delete(`/notices/${deletedNotice.id}`)
      .then(() => {
        this.setState(state => {
          const notices = state.notices.filter(
            (notice, index) => notice.id !== deletedNotice.id
          )
          return { notices }
        })
      })
      .catch(error => console.log(error))
  }
  handleUpdate = (event, formInputs) => {
    event.preventDefault()
    axios
      .put(`/notices/${formInputs.id}`, formInputs)
      .then(() => {
        this.getNotices()
      })
      .catch(error => console.error(error))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside handleSubmit={this.handleAdd} />
          <Main
            notices={this.state.notices}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
