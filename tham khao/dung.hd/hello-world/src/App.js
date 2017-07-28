import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  user = {'firstName':'Dung','lastName':'Hoang Dang'};

  constructor (props) {
    super(props);
    this.state ={messages:'hello',number:'',mang:[]};
    this.showAlert = this.showAlert.bind(this);
    this.Showmessages = this.Showmessages.bind(this);
    this.ShowStateMessages = this.ShowStateMessages.bind(this);
    this.ShowRandomNumber = this.ShowRandomNumber.bind(this);
  }
  Showmessages(){
    alert(`Full Name is ${this.user.lastName} ${this.user.firstName} `);
  }
  showAlert() {
    alert(this.props.abc);
  }
  HelloWorld(){
    alert('Hello World');
  }
  ShowStateMessages(){
    alert(this.state.messages);
    return console.log(this.state.messages);
  }
  Random(){
    let num = Math.floor((Math.random() *10) +1);
    return num;
  }
  ShowRandomNumber(){
    /*var num = Math.floor((Math.random() * 3) +1);*/
    var solanfail = 0;
    while(true){
      var i = this.Random();
      if(solanfail >= 5){
        console.log("da dung");
        return false;
      }
      if(this.state.number === i){
        solanfail++;
        console.log("so lan fail"+solanfail);
      }else{
        this.setState({number: i});
        console.log(i);
        return true;
      }
    }
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
  componentWillReceiveProps(nextProps){

  }
  shouldComponentUpdate(nextProps, nextState){
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
        <button onClick={this.showAlert} id="click1">Click show props</button>
        <br/>
        <button onClick={this.HelloWorld}>Click show HelloWorld</button>
        <br />
        <button onClick={this.Showmessages}>Click show messages rule ES6</button>
        {/*<button>Click me</button>*/}
        <p>đây là messages của this.state.messages = {this.state.messages}</p>
        <button onClick={this.ShowRandomNumber} className="App-button-1">click Random</button>
        <button>random unduplicated</button>
        <p>0</p>
      </div>
    );
  }
}

export default App;
