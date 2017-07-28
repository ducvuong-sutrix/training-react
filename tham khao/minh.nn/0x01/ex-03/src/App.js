import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const numberList = [1, 3, 2, 7, 6, 10, 77];
    this.state = {
      randomNum: '',
      numberList
    }
  }
  randomNumber = () => {
    let emptyList = [];
    for (let i = 0; i<= 100; i++) {
      if (this.state.numberList.indexOf(i) === -1) {
        emptyList.push(i);
      }
    }
    let result = emptyList[Math.floor(Math.random()*emptyList.length)];
    this.setState({
      randomNum: result
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p></p>
        {this.state.numberList.map((number) => (
          <span>{number}</span>
        ))}
        <p>{this.state.randomNum}</p>
        <button onClick={this.randomNumber}>Display number</button>
      </div>
    );
  }
}

export default App;
