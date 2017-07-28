import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      text: '',
      number: '',
      array: []
    }
  }


  componentWillMount(){
    console.log('App componentWillMount');
  }

  componentWillReceiveProps(nextProps){
    console.log('App componentWillReceiveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState){
    console.log('App componentWillUpdate', nextProps, nextState);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('App shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    console.log('App componentDidUpdate', prevProps, prevState);
  }

  componentDidMount(){
    console.log('App componentDidMount');
  }

  componentWillUnmount(){
    console.log('App componentWillUnmount');
  }

  handleClick = () =>{
    this.setState({text: 'Hello World'});
  }

  getNumber = () => {
    return Math.ceil(Math.random()*100,1);
  }

  getArrayNumber = () => {
    const num = this.handleRandom();
    let array = this.state.array.slice();
    array.push(num);
    this.setState({array: array});
    this.setState({number: num});
  }

  getNumberRandom = () => {
    const num = this.getNumber();
    let array = this.state.array.slice(),
        flag = false;

    for(let i = 0; i < array.length; i++){
      if(array[i] === num) {
        console.log('trung', num);
        flag = true;
        return flag;
      }
    }

    if(!flag) {
      array.push(num);
      this.setState({array: array});
      this.setState({number: num});
    }
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
        <h4>Ex 01: {this.state.text}</h4>
        <button onClick={this.handleClick}>Say Hello</button>

        <HelloWorld text={this.state.text}/>

        <h4>Ex 03: </h4>
        <button onClick={this.getNumberRandom}>Random number</button>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default App;
