import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js';
import GenerateNumber from './GenerateNumber.js';

class App extends Component {
  constructor(props) {
    console.log('App contructor', props);
    super(props);
    this.state = {
      title: props.title,
      initialNumber: 1
    }

    this.changeTitle = this.changeTitle.bind(this);
  }

  componentWillMount() {
    console.log('App: componentWillMount');
  }

  componentDidMount() {
    console.log('App: componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('App: componentWillReceiveProps nextProps: ', nextProps);

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App: componentWillReceiveProps nextProps: ', nextProps, ' nextStete: ', nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App componentWillUpdate nextProps: ', nextProps, ' nextState: ', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate prevProps: ', prevProps, ' prevState: ', prevState); 
  }

  changeTitle(newTtile) {
    this.setState({
      title: newTtile
    })
  }

  render() {
     console.log('App: render');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <HelloWorld changeTitle={this.changeTitle} title={this.state.title}/>
        <GenerateNumber initialNumber={this.state.initialNumber}/>
      </div>
    );
  }
}

export default App;
