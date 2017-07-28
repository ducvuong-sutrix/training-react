import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello World!!!',
      eventNumber: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }
  componentWillUnMount() {
    console.log('componentWillUnMount');
  }

  handleClick() {
    var randomNumber = parseInt(Math.random() * 100);

    if ( randomNumber % 2 === 0 ) {
      this.setState({text: 'Button is clicked', evenNumber: randomNumber});
    } else {
      this.setState({text: 'Button is clicked'});
    }
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.text}
        </p>
        <p>Random even number less than 100: {this.state.evenNumber}</p>
        <button onClick={this.handleClick}>Click me!!!</button>
      </div>
    );
  }
}

export default App;
