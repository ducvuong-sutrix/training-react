import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello React",
    }
  }
  changeTitle = () => {
    this.setState({ title: "Bye bye React :)" });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Content newTitle = {this.state.title}></Content>
        <button onClick={this.changeTitle}>Change title</button>
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log('Component will mount');
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentWillReceivePros(newProps) {
    console.log('Component will recieve props');
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component did update');
  }
  componentWillUnmout() {
    console.log('Component will unmount');
  }
  render() {
    return (
      <h1>{this.props.newTitle}</h1>
    );
  }
}

export default App;
