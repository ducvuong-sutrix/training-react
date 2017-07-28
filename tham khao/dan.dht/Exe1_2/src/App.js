import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {mess: 'Hellooooo'};

    // This binding is necessary to make `this` work in the callback
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillUnMount(){
    console.log('componentWillUnMount');
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  shoulComponentUpdate(){
    console.log('shoulComponentUpdate');
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  handleClick = () => {
    this.setState({mess: 'WHAT IS THIS?'})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.mess}</p>
        <button onClick={this.handleClick}>Click me</button>  
      </div>
    );
  }
}


export default Toggle;
