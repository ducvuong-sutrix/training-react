import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Ai dạy lớp react js này?',
      numberRandom: 0,
      arrayRandom: [],
    };
  }

  handleChange = () => {
    this.setState({ message: 'Tân bê đê' });
  }

  handleRandom = () => {
    const min = 1;
    const max = 10;
    const rand = (min + Math.random() * (max - min)).toFixed(0);
    const newArrRandom = this.state.arrayRandom.slice();

    if (newArrRandom && newArrRandom.indexOf(rand) !== -1) {
      if(newArrRandom.length === max) {
        return false;
      }
      return this.handleRandom();
    }

    newArrRandom.push(rand);
    this.setState({ numberRandom: rand, arrayRandom: newArrRandom });
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps.message);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate + ', `nextProps:${nextProps.message}`, `nextState ${nextState.message}`);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', `nextProps ${nextProps.message}`, `nextState ${nextState.message}`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', `nextProps ${prevProps.message}`, `nextState ${prevState.message}`);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render()');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="exe-1">
          <span>{this.state.message}</span>
          <button onClick={this.handleChange}>Click vào đây</button>
        </div>
        <div className="exe-2">
          <span>{this.state.numberRandom}</span>
          <button onClick={this.handleRandom}>Click vào đây</button>
          <div>
            {this.state.arrayRandom.map((item, index) => (
              <span key={index}>{item},</span>
            ))}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
