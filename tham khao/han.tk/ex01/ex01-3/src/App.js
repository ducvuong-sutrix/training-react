import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showedNumbers: [],
      currentNumber: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let num = Math.floor(Math.random() * 100) + 1;
    let showedNumbers = this.state.showedNumbers;
    while(showedNumbers.indexOf(num) !== -1) {
      num = Math.floor(Math.random() * 100) + 1;
    }
    showedNumbers.push(num);
    this.setState({
      currentNumber: num,
      showedNumbers: showedNumbers
    })
  }

  render() {
    console.log(this.state.showedNumbers);
    return (
      <div className="App">
        <h2>Print random number from 1 to 100 without duplicate.</h2>
        <p>Current number: {this.state.currentNumber}</p>
        <button onClick={this.handleClick}>
          Click here!
        </button>
      </div>
    );
  }
}

export default App;
