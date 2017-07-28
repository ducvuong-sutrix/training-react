import React, { Component } from 'react';

class Phone extends Component {
	constructor(props) {
		super(props);
		this.handlePhoneInputChange = this.handlePhoneInputChange.bind(this);
	}

	handlePhoneInputChange(e) {
    const regex = /(\d{3}-\d{3}-\d{4}$)|(\d{3}-\d{4}-\d{4}$)/;
    const phoneNumber = e.target.value;
    let isValid = regex.test(phoneNumber) ? true : false;
		this.props.onPhoneInput(phoneNumber, isValid);
    e.preventDefault();
	}

  render() {
    const regex = /(\d{3}-\d{3}-\d{4}$)|(\d{3}-\d{4}-\d{4}$)/;
    const phoneNumber = this.props.phoneNumber.value;
    let validateMessage = '';
    if (!regex.test(phoneNumber) && phoneNumber.length > 0) {
      validateMessage = <p>Phone format: <strong>nnn-nnn-nnnn</strong> or <strong>nnn-nnnn-nnnn</strong></p>
    }
    return (
      <div>
        <label>Phone Number:<span className="required">&#42;</span></label>
        <input 
        	type="tel"
        	value={phoneNumber}
        	onChange={this.handlePhoneInputChange} />
        {validateMessage}
      </div>
    );
  }  
}

export default Phone;