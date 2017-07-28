import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [23,56,12,78,89,100,45],
      currentVal: 0
    }
    this.randomNumber = this.randomNumber.bind(this);
  }
  componentWillMount() {
     console.log('Component WILL MOUNT!')
  }

  componentDidMount() {
     console.log('Component DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {    
     console.log('Component WILL RECIEVE PROPS!')
  }

  shouldComponentUpdate(newProps, newState) {
    if(this.state.currentVal !== newState.currentVal) {
      return false;
    }else {
      return true;
    }
  }

  componentWillUpdate(nextProps, nextState) {
     console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
     console.log('Component DID UPDATE!')
  }

  componentWillUnmount() {
     console.log('Component WILL UNMOUNT!')
  }

  randomNumber() {
    const target = document.getElementsByClassName('number');
    const currentNum = parseInt(target[0].innerHTML, 10);
    let num = this.state.currentVal;
    while(num === currentNum) {
      const index = Math.floor(Math.random()*(this.state.number.length));
      if(this.state.number[index] !== currentNum) {
        this.setState({
          currentVal: this.state.number[index]
        });
        num = this.state.number[index];
      }
    }
    target[0].innerHTML = num;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {this.props.name}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="number">0</p>
        <button className="btn" onClick={this.randomNumber}>Click me</button>
      </div>
    );
  }
}

export default App;
