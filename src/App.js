import React, { Component } from 'react';
import './App.css';
import HeatMap from './HeatMapTable.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HeatMap />
        </header>
      </div>
    );
  }
}

export default App;
