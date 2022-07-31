import React from 'react'
import axios from 'axios'
import Header from './components/Header.js'
import Player from './components/Player.js'
import Board from './components/Board.js'

// very similar to require()

class App extends React.Component {
  useAxios = () => {
    axios.get('/someroute').then(something => console.log(something))
  }
  render() {
    return (
      <div>
        <Header />
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
        <Board />
      </div>
    )
  }
}
// very similar to module.exports =
export default App
