import React, { Component } from 'react';

class Email extends Component {
	constructor(props) {
		super(props);
		this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
	}

	handleEmailInputChange(e) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = e.target.value;
    let isValid = regex.test(email);
		this.props.onEmailInput(email, isValid);
    e.preventDefault();
	}

  render() {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = this.props.email.value;
    let len = email.length;
    let validateMessage = '';
    if(!regex.test(email) && len > 0) {
      validateMessage = <p>Email format: <strong>example@gmail.com</strong></p>
    }
    return (
      <div>
        <label>Email:<span className="required">&#42;</span></label>
        <input
        	type="email"
        	value={email}
        	onChange={this.handleEmailInputChange} />
        {validateMessage}
      </div>
      
    );
  }  
}

export default Email;