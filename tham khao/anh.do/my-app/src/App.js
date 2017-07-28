import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactForm from './0x02/reactForm';
class App extends Component {
  constructor() {
    super();
    this.state = {
      change: 'Hello ReactJS'
    };
    this.actionLink = this.actionLink.bind(this);
  }
  actionLink() {
    this.setState({
      change: 'hello world'
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ReactForm />
      </div>
    );
  }
}

export default App;
