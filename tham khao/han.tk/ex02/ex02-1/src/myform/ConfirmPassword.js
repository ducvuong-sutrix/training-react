import React, { Component } from 'react';

class ConfirmPassword extends Component {
	constructor(props) {
		super(props);
		this.handleConfirmPasswordInputChange = 
			this.handleConfirmPasswordInputChange.bind(this);
	}

	handleConfirmPasswordInputChange(e) {
    let password = this.props.password.value;
    let confirmPassword = e.target.value;
    let isValid = password === confirmPassword ? true : false;
		this.props.onConfirmPasswordInput(confirmPassword, isValid);
    e.preventDefault();
	}

  render() {
    const password = this.props.password.value;
    const confirmPassword = this.props.confirmPassword.value;
    let validateMessage = '';
    if (password !== confirmPassword) {
      validateMessage = <p>Passwords are <strong>not</strong> match.</p>
    }
    return (
      <div>
        <label>Confirm Password:<span className="required">&#42;</span></label>
        <input 
        	type="password"
        	value={confirmPassword}
        	onChange={this.handleConfirmPasswordInputChange} />
        {validateMessage}
      </div>
    );
  }  
}

export default ConfirmPassword;