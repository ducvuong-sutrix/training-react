import React, { Component } from 'react';

class Username extends Component {
  constructor(props) {
    super(props);
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
  }

  handleUsernameInputChange(e) {
    let valid = e.target.value.length >= 6 ? true : false;
    this.props.onUsernameInput(e.target.value, valid);
    e.preventDefault();
  }

  render() {
    const name = this.props.username.name;
    let len = name.length;
    let validateMessage = '';
    if (len > 0 && len < 6) {
      validateMessage = <p>Username must at least <strong>6</strong> characters.</p>;
    }
    return (
      <div>
        <label>Username:<span className="required">&#42;</span></label>
        <input 
          type="text" 
          value={name}
          onChange={this.handleUsernameInputChange} />
        {validateMessage}
      </div>
    );
  }
}

export default Username;