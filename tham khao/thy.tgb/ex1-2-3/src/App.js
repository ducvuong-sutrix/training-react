import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  user = {'firstName': 'Thy', 'lastName': 'Tran'}
  constructor (props) {
    super(props);
    this.state = {message: 'Hello World', number: '', click: false};
  }
  changeMessages = () => {
    this.setState({message:`I'm ${this.user.firstName} ${this.user.lastName}`});
  }
  randomNumber = () => {
    this.setState.click = true;
    var x = Math.floor((Math.random() * 10) + 1);
    this.setState({number: x});
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
  componentWillReceiveProps(nextProps){

  }
  shouldComponentUpdate(nextProps, nextState){
    if (this.state.number === nextState.number && this.setState.click === true) {
      alert('This is loop!');
      this.setState.click = false;
      return false;
    }
    return true;
  }
  componentWillUpdate(){

  }
  componentDidUpdate(prevProps,prevState){

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
        <p>{this.state.message}</p>
        <button onClick = {this.changeMessages}>Click Here!</button>
        <br /><br />
        <button onClick = {this.randomNumber}>Random</button>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default App;
