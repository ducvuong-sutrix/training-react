import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <div>
        <label>Bio:</label>
        <textarea rows="5" cols="25" ref={(input) => this.input = input}></textarea>
      </div>
    );
  }  
}

export default Bio;