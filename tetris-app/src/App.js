import React from 'react';
import GridSquare from './components/grid-square'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="App-Title"> Teris Redux</h1>
      </header>
      <GridSquare color="1" />
    </div>
  );
}

export default App;
