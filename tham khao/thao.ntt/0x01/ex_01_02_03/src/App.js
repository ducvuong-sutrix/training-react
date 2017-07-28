import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World',
      number: -1,
      array: []
    };
    this.changeMessage = this.changeMessage.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
  }
  
  componentWillMount() {
    console.log('ComponentWillMount');
  }

  componentDidMount() {
    console.log('ComponentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('ComponentWillReceiveProps' + nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.array);
    console.log('shouldComponentUpdate'  + nextProps  + nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('ComponentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate'); 
  }
  changeMessage(){
    this.setState({message: 'Hello everybody!'});
  }
  
  randomNumber(){
    var number = parseInt(Math.random()*100, 10),
    flag = true,
    array = this.state.array;
    while(flag){
      if(array.indexOf(number) < 0){
        flag = false;
      }else{
        number = parseInt(Math.random()*100, 10);
      }
    }
    array.push(number);
    this.setState({number: number, array: array});
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        <div> {this.state.message} </div>
        <button onClick={this.changeMessage}> Click </button>
        <div> {this.state.number} </div>
        <button onClick={this.randomNumber}> Click </button>
      </div>
    );
  }
}

export default App;
