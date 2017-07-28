import React, { Component } from 'react';
import Ex1x1 from './ex/Ex1.1.js';
import Ex1x2 from './ex/Ex1.2.js';
import Ex1x3 from './ex/Ex1.3.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ex1x1 />
        <Ex1x2 message="message" />
        <Ex1x3 max="100" />
      </div>
    );
  }
}

export default App;
