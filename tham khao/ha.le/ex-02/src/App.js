import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Messages';

class App extends Component {
  constructor(props) {
    super(props);
    
    console.log('constructor');

    this.state = {
      text: ''
    };
  }

  componentWillMount() {
    console.log('componentWillMount parent');
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps parent', nextContext, nextProps);

  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate parent');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate parent', nextProps, nextState);
    return this.state !== nextState;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate parent', prevState, prevProps);
  }

  componentDidMount() {
    console.log('componentDidMount parent');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount parent');
  }

  handleOnChange = (e) => {
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit  and save to reload.
        </p>
        <p>My text has change: {this.state.text}</p>  
        <input type="text" onChange={this.handleOnChange} /> 

        <Message text={this.state.text}/>
      </div>
    );
  }
}

export default App;
