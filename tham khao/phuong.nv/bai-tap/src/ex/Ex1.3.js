import React, { Component } from 'react';
import '../App.css';

class Ex3 extends Component {
  // constructor

  constructor(props) {
    console.log('constructor ex3');
    super(props);
    this.state = {
      max: this.props.max,
      array: [],
      value: 0
    };
    // this.getRandomInt = this.getRandomInt.bind(this);
    this.getRandomUnique = this.getRandomUnique.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.state.array.length > 20) {
      alert('too enough');
      return;
    }
    this.getRandomUnique();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  getRandomUnique() {
    let noFalse = 0;
    while (true) {
      if (noFalse > 5) {
        alert('try again!');
        return;
      }
      let num = this.getRandomInt(0, this.state.max);
      let array = this.state.array;
      if (array.indexOf(num) < 0) {
        array.push(num);
        this.setState({ value: num, array: array });
        return;
      }
      noFalse++;
    }
  }

  // mounting

  componentWillMount() {
    console.log('willMount');
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <p>
          {this.state.value}
        </p>
        <p>
          {this.state.array.toString()}
        </p>
        <button onClick={this.clickHandler}>get unique num</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('didMount');
  }

  // updating

  componentWillReceiveProps() {
    console.log('willReceiveProps');
  }

  shouldComponentUpdate() {
    console.log(this.state.array);
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

export default Ex3;
