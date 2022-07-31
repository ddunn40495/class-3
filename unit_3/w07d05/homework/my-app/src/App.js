import React from 'react';
import axios from 'axios';
import './App.css';
import Answer from "./components/Answer";
import Category from "./components/Category";
import Headline from "./components/Headline";
import Play from "./components/Play";
import QButton from "./components/QButton";
import QuestionBox from "./components/QuestionBox";
import Score from "./components/Score";
import Worth from "./components/Worth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


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
      <Container>
          <Headline />
          <Score score={this.state.score} />
          <Play />
          <QButton question={this.getQuestion} />
          <QuestionBox question={this.state.question}/>
          <Category category={this.state.category}/>
          <Worth value={this.state.questVal}/>
          <Answer switch={this.changeDisplay} change={this.checkDisplay} answer={this.state.display}/>
             
    </Container>
    )
}

}


export default App;
