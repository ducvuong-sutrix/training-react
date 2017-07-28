import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  handleRandom = () => {
    return Math.floor((Math.random() * 100) + 1);
  }
  
  componentWillMount() {
    this.initData();
  }

  initData = () => {
    const num = this.handleRandom();
    let {data} = Object.assign({}, this.state);
    data.push(num);
    this.setState({data: data});
  }

  handleClick = () => {
    let hasItem = false;
    const num = this.handleRandom();
    let {data} = Object.assign({}, this.state);

    data.forEach((value) => {
      if(value === num) {
        console.log('trung trung', num);
        hasItem = true;
        return hasItem;
      }
    });

    if(!hasItem) {
      data.push(num);
      this.setState({data: data});
    } 
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  render() {
    const item = this.state.data.map((number, index) => {
      return <li key={index}> {number}</li>;
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Random number less 100 diff</button>
        <h4>List number random: </h4>
        <ul>
          {item}
        </ul>
      </div>
    );
  }
}

export default App;
