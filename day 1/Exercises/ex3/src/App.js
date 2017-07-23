import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Random from './random/random';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Exercise 3 - Random Number
        </p>
        <Random />
      </div>
    );
  }
}

export default App;
