class Score extends React.Component {
    state = {}
    render() {
      return (
          <div className='row score-div'>
              <div className='score'>
              <h1>
                  <span>Score:</span><br></br>
                  {this.props.score}
                  </h1>
              </div>
        </div>
       
      )
  }

}




class Headline extends React.Component {
    state = {}
    render() {
      return (
          <div className='row big-name'>
              <div className='name'>
              <h1>Welcome to Jepardy</h1>
              </div>
        </div>
       
      )
  }

}

class Play extends React.Component {
    state = {}
    render() {
      return (
          <div className='row play-row'> 
                    <div className='play-headline'>
                    <h1>Lets Play</h1>
                    </div>
          </div>
      )
  }

}


class QButton extends React.Component {
    state = {}
    render() {
      return (
          <div className='row qbutton-row'> 
                    <div className='qbutton-box'>
                    <button onClick={this.props.question}>Get Question</button>
                    </div>
          </div>
      )
  }

}



class Worth extends React.Component {
    state = {}
    render() {
      return (
       <div className='row worth-row'>
            <div className='font-change'>
              <h2>
                    <span>Worth:</span><br></br>
                    {this.props.value} points
                </h2>
              </div>
       </div>
      )
  }

}

class Category extends React.Component {
    state = {}
    render() {
      return (
       <div className='row category-row'>
            <div className='font-change'>
                <h2>
                    <span>Category:</span><br></br>
                    {this.props.category}
                </h2>
              </div>
       </div>
      )
  }

}

class QuestionBox extends React.Component {
    state = {}
    render() {
      return (
          <div className='row question-row'>
              <div className='font-change'>
              <h2>
                    <span>Question:</span><br></br>
                    {this.props.question}
                </h2>
              </div>
        </div>
       
      )
  }

}




class Answer extends React.Component {
    
    render() {
      return (
          <div className='row answer'>
              <button onClick={this.props.switch}>Reveal Answer</button>
                <div className='answer-div'>
                    {this.props.answer}
                </div>           



          </div>
      )
  }

}


  class App extends React.Component {
    state = {
        score: 0,
        question: 0,
        answer: 0,
        category: 0,
        questVal: 0,
        display: false

    }
   checkDisplay = () => {
       if (this.state.display === true) {
           return (
            <h2>{this.state.answer}</h2>
           )
       }
   }
   changeDisplay = () => {
       this.setState({
           display: this.state.answer
       })
    }
    getQuestion = (event) => {
        event.preventDefault()
        axios.get('http://jservice.io/api/random').then(
            (response) => {
                console.log(response);
                this.setState({
                    question: response.data[0].question,
                    answer: response.data[0].answer,
                    questVal: response.data[0].value,
                    category: response.data[0].category.title,
                    display: false
                    
                })
            }
        )
    }
    render() {
      return (
        <div className='container'>
            <Headline />
            <Score score={this.state.score} />
            <Play />
            <QButton question={this.getQuestion} />
            <QuestionBox question={this.state.question}/>
            <Category category={this.state.category}/>
            <Worth value={this.state.questVal}/>
            <Answer switch={this.changeDisplay} change={this.checkDisplay} answer={this.state.display}/>
               
        </div>
      )
  }

}



ReactDOM.render(
    <App />,
    document.querySelector('main')
);
