import React, { Component } from 'react';
import '../App.css';

class Ex2 extends Component {
  // constructor

  constructor(props) {
    console.log('constructor ex2');
    super(props);
    this.state = {
      message: this.props.message
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ message: 'message changed' });
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
          {this.state.message}
        </p>
        <button onClick={this.clickHandler}>change message</button>
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

export default Ex2;
