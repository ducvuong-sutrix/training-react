import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lifecycle from "./lifecycle/lifecycle"
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Exercise 2 - Change Message
        </p>
        <Lifecycle message = "Hello"/>
      </div>
    );
  }
}

export default App;
