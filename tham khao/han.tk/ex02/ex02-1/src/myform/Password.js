import React, { Component } from 'react';

class Password extends Component {
	constructor(props) {
		super(props);
		this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
	}

	handlePasswordInputChange(e) {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let password = e.target.value;
    let isValid = regex.test(password);
		this.props.onPasswordInput(password, isValid);
    e.preventDefault();
	}

  render() {
    let password = this.props.password.value;
    let len = password.length;
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let validateMessage = '';
    if (!regex.test(password) && len > 0) {
      validateMessage = 
        <ul>
          <li>At least 1 <strong>UPPERCASE</strong> letter.</li>
          <li>At least 1 <strong>lowercase</strong> letter.</li>
          <li>At least 1 of these <strong>!,@,$,%,^,&,*</strong> characters.</li>
          <li>Password length <strong>&gt;= 8</strong> characters.</li>
        </ul>
    }
    return (
      <div>
        <label>Password:<span className="required">&#42;</span></label>
        <input 
        	type="password"
        	value={password}
        	onChange={this.handlePasswordInputChange} />
        {validateMessage}
      </div>
    );
  }  
}

export default Password;