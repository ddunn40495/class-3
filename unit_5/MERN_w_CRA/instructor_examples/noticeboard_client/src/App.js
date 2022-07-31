import React from 'react'
import axios from 'axios'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'

class App extends React.PureComponent {
  state = {
    notices : []
  }
  // did this html element get 'mounted' in the dom?
  // yes? then run the stuff in here
  // most similar to document on ready
  componentDidMount() {
    this.getNotices()
  }
  getNotices = () => {
    axios
      .get('/notices')
      .then(response => this.setState({notices: response.data}))
  }
  handleAdd = (event, formInputs) => {
    axios
      .post('/notices', formInputs)
      .then(jsonedNotice => this.setState({notices: [jsonedNotice.data, ...this.state.notices]}))
  }
  handleDelete = deletedNotice => {
    axios
      .delete(`/notices/${deletedNotice.id}`)
      .then(() => {
        this.setState((state) => {
          const notices = state.notices.filter((notice) => {
            return notice.id !== deletedNotice.id
          })
          return { notices }
        })
      })
  }
  handleUpdate = (event, formInputs) => {
    event.preventDefault()
    axios
      .put(`/notices/${formInputs.id}`, formInputs)
      .then(() => {
        this.getNotices()
      })
  }
  render() {

    return (
      <div className="App">
       <div className="container">
       <Header />
       <Aside handleSubmit={this.handleAdd}/>
       <Main notices={this.state.notices} handleDelete={this.handleDelete}
       handleUpdate={this.handleUpdate}/>
       <Nav />
       <Footer />
       </div>
      </div>
    )
  }
}

export default App


// const someFunc = () => {
//   // let x = 2 + 3
//   // return x
//   return 2 + 3
// }
