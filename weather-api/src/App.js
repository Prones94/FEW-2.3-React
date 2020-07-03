import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Weather from './Weather'
import rootReducer from './reducers'
import './App.css';
import WeatherDisplay from './WeatherDisplay'



// Create the store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk))


function App(){
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <WeatherDisplay />
        <Weather />
      </header>
    </div>
    </Provider>
  )
}

export default App;