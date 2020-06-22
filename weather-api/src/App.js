import React, { Component } from 'react';
import Weather from './Weather'

import './App.css';
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '94010',     // Used to hold value entered in the input field
      weatherData: null,  // Used to hold data loaded from the weather API
    }
  }

  render() {
    const {weatherData} = this.state
    return (
      <div className="App">
        <Form handleSubmit={(e)=> this.handleSubmit(e)} />
        <Weather weatherData = {weatherData} />
      </div>
    );
  }
}

export default App;