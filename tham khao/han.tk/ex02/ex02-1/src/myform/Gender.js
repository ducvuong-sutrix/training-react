import React, { Component } from 'react';

class Gender extends Component {
	constructor(props) {
		super(props);
		this.handleGenderInputChange = this.handleGenderInputChange.bind(this);
	}

	handleGenderInputChange(e) {
		this.props.onGenderInput(e.target.value);
	}

  render() {
    return (
      <div>
        <label>Gender:<span className="required">&#42;</span></label>
        <input 
        	type="radio" 
        	name="gender" 
        	value="male" 
        	checked={this.props.genderOption === 'male'}
        	onChange={this.handleGenderInputChange} /> Male <br />
        <input 
        	type="radio" 
        	name="gender" 
        	value="female"
        	checked={this.props.genderOption === 'female'}
        	onChange={this.handleGenderInputChange} /> Female <br />
        <input 
        	type="radio" 
        	name="gender" 
        	value="other"
        	checked={this.props.genderOption === 'other'}
        	onChange={this.handleGenderInputChange} /> Other
      </div>
    );
  }  
}

export default Gender;