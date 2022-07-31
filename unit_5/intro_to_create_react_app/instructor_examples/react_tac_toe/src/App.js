import React from 'react';
import Header from './components/Header'
import Player from './components/Player'

class App extends React.Component {
  render () {
    return(
      <div>
        <Header  />
        <Player whichPlayer="X"/>
        <Player whichPlayer="O"/>
      </div>)
  }
}

export default App;
