import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: -1,
      arrayNumber: []
    }
    this.randomNumber = this.randomNumber.bind(this);
  }

  randomNumber() {
    let number = parseInt(Math.random()*100, 10);
    let array = this.state.arrayNumber;
    while(array.indexOf(number) !== -1) {
      number = parseInt(Math.random()*100, 10);
    }
    array.push(number);
    this.setState({number: number});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p> {this.state.number} </p>
        <button onClick={this.randomNumber}> Click </button>
      </div>
    );
  }
}

export default App;
