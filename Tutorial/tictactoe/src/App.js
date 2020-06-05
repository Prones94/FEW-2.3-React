import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './Board.js'
import './App.css'
import './Square.js'
import './Winner.js'
import Game from './Game.js'


class App extends Component {
  render(){
    return(
      <div>
      <header className="header">Tic Tac Toe!</header>
      <div><Game /></div>
      
      </div>
    )
  }
}


export default App
