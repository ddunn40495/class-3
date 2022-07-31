import React, {Component} from 'react'
import Form from './Form'

 class Notice extends Component {
   state = {
     formVisible: false
   }
   toggleForm = () => {
     this.setState({formVisible: !this.state.formVisible})
   }
  render () {
    const {notice, handleDelete, handleUpdate} = this.props
    return (
      <React.Fragment>
      { this.state.formVisible
      ? <Form
          notice={notice}
          handleSubmit={handleUpdate}
          toggleForm={this.toggleForm}
        >
          <button onClick={this.toggleForm}> Nevermind!</button>
        </Form>
      :       <div className="notice">
               <h3>{ notice.title }</h3>
               <p>{ notice.author }</p>
               <small>{notice.phone }</small>
               <button onClick={()=>handleDelete(notice)}>X</button>
               <button onClick={this.toggleForm}> Edit this notice</button>
             </div>
      }

       </React.Fragment>
    )
  }
}

export default Notice
