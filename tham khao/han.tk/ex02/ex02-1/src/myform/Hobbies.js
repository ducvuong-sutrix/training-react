import React, { Component } from 'react';

class Hobbies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: []
    }
    this.handleHobbyCheck = this.handleHobbyCheck.bind(this);
    this.toggleHobbyCheck = this.toggleHobbyCheck.bind(this);
  }

  toggleHobbyCheck(hobby) {
    let hobbies = this.state.hobbies;
    let pos = hobbies.indexOf(hobby);
    if(pos === -1) {
      hobbies.push(hobby);
    } else {
      hobbies.splice(pos, 1);
    }
    this.setState({
      hobbies: hobbies
    });
  }

  handleHobbyCheck(e) {
    this.toggleHobbyCheck(e.target.value);
    this.props.onHobbyCheck(this.state.hobbies);
  }

  render() {
    let currentHobbies = this.props.hobbies;
    let music = currentHobbies.indexOf('Music') !== -1 ? true : false;
    let movie = currentHobbies.indexOf('Movie') !== -1 ? true : false;
    let code = currentHobbies.indexOf('Code') !== -1 ? true : false;
    return (
      <div>
        <label>Hobbies:<span className="required">&#42;</span></label>
        <input 
          type="checkbox" 
          value="Music"
          checked={music}
          onChange={this.handleHobbyCheck} /> Music <br />
        <input
          type="checkbox" 
          value="Movie"
          checked={movie}
          onChange={this.handleHobbyCheck} /> Movie <br />
        <input 
          type="checkbox" 
          value="Code"
          checked={code}
          onChange={this.handleHobbyCheck} /> Code
      </div>
    );
  }  
}

export default Hobbies;