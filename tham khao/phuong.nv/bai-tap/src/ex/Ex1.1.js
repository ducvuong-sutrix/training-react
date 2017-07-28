import React, { Component } from 'react';
import '../App.css';

class Ex1 extends Component {
  // constructor

  constructor(props) {
    console.log('constructor ex1');
    super(props);
    this.state = {
      message: this.props.message
    };
  }

  // mounting

  componentWillMount() {
    console.log('willMount');
  }

  render() {
    console.log('render');
    return <div className="App" />;
  }

  componentDidMount() {
    console.log('didMount');
  }

  // updating

  componentWillReceiveProps() {
    console.log('willReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('willUpdate');
  }

  componentDidUpdate() {
    console.log('didMount');
  }

  // unmouting

  componentWillUnmout() {
    console.log('willUnmount');
  }
}

export default Ex1;
