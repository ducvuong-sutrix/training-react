import React, { Component } from 'react';

class reactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.state);
  }
  handleSubmit(event) {
    var username = this.refs.username.value,
        password = this.refs.password.value;
    this.setState({
      'username': username,
      'password': password
    });
    console.log(this.setState.username);
    console.log(this.setState.password);
  }
  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label>Username:</label>
        <input type="text" name="Username" ref="username" />
        <label>Password:</label>
        <input type="password" name="Password" ref="password" />
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default reactForm;
