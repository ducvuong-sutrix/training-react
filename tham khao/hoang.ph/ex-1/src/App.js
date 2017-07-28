import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*const user ={
  name: 'ahihi'
};*/
class App extends Component {
  user = {name:'ahihi'};
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
    this.state = {isStart: true, randomArray: []};
  }
  // componentWillMount(){

  // }
  // componentDidMount(){

  // }
  // componentWillUnMount(){

  // }
  // componentWillReceiveProps(nextProps){

  // }
  // shouldComponentUpdate(nextProps, nextState){

  // }
  // componentWillUpdate(nextProps, nextState){

  // }
  // componentDidUpdate(prevProps, prevState){

  // }
  Welcome(user){
    return <h1>{this.user.name}</h1>;
  }
  Random(state,randomArray){
    const isStart = state;
    var slot = 10;
    if(isStart){
      return <h2>Start random</h2>;
    }
    else{
      var random = Math.floor((Math.random() * slot) + 1);
      var i, flag;
      if(randomArray.length === 0){
        this.state.randomArray.push(random);
        return <h2>{random}</h2>;
      }
      else if(randomArray.length !== slot){
        do{
          flag = 0;
          for(i=0; i<randomArray.length; i++){
            if(random === randomArray[i]){
              flag += 1;
            }
          }
          if (flag !== 0) {
            random = Math.floor((Math.random() * slot) + 1);
          }
        }while(flag !== 0)
        this.state.randomArray.push(random);
        return <h2>{random}</h2>;
      }
      else{
        return <h2>Full roài, max 10 thôi :D</h2>;
      }
    }
  }
  click(){
    this.setState({isStart: false});
  }
  render() {
    const isStart = this.state.isStart;
    const randomArray = this.state.randomArray;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        Hi, {this.Welcome()}
        <button onClick={this.click}>
          Don't click :x
        </button>
        {this.Random(isStart,randomArray)}
      </div>
    );
  }
}

export default App;
