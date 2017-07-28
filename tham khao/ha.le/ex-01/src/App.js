import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
    
  }

  handleClick = () => {
     this.setState({text: 'Hello'}); 
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
        <p>Click button: {this.state.text}</p>
        <button onClick={this.handleClick}>Say hello</button>  
      </div>
    );
  }
}

export default App;
