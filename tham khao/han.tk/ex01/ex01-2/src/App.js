import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello World!'};
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
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

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick() {
    this.setState({
      message: 'Hello Again!'
    });
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
