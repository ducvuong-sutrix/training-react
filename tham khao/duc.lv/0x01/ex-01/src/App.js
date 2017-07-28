import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import numberRandom from './numberRandom.js';
class App extends Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = {
      text: 'hello world'
    };
  }
  handleClick = () => {
     this.setState({text: 'Hello'});
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');

  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  render() {
    console.log('render');

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <numberRandom />
          <p>{this.state.text}</p>
          <button onClick={this.handleClick}>hello</button>
      </div>
    );
  }
}

export default App;
