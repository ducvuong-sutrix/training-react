import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'ahihi',
      numberStore: [],
      number: null,
      count: 4
    };
    this.changeMessage = this.changeMessage.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
  }
  changeMessage() {
    this.setState({message: 'changeMessage changed'});
  }
  randomNumber() {
    // let count = this.state.count;
    // let lengthStore = this.state.numberStore.length;
    // console.log(this.state.numberStore);
    // if(lengthStore <= count - 1) {
    //   let rand = Math.floor((Math.random() * count));
    //   for(let i = 0; i < this.state.numberStore.length ; i++) {
    //     if(this.state.numberStore[i] === rand) {
    //       this.randomNumber();
    //       break;
    //     }
    //   }
    //   this.setState({
    //     numberStore: this.state.numberStore.concat(rand),
    //     number: rand
    //   });
    // }
  }
  // before render
  componentWillMount() {
    console.log('componentWillMount');
  }
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps***********************');
  // }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  // render()
  // after render
  componentDidUpdate() {
    if(this.state.runChange) {
      this.setState({
        message: 'componentDidUpdate changed',
        runChange: false
      });
      console.log('componentDidUpdate');
    }
  }
  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.state.message+ '______________');
  }
  render() {
    console.log('render');
    console.log(this.state.message);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">Change Message: {this.state.message}</p>
        <p className="App-intro">Random: {this.state.number}</p>
        <button onClick={this.changeMessage}>Change Message</button>
        <button onClick={this.randomNumber}>Random Number 0  to {this.state.count}</button>
      </div>
    );
  }
}

export default App;
