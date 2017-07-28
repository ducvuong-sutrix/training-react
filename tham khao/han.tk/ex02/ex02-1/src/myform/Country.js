import React, { Component } from 'react';

class Country extends Component {
	constructor(props) {
		super(props);
		this.handleCountrySelectChange = this.handleCountrySelectChange.bind(this);
	}

	handleCountrySelectChange(e) {
		this.props.onCountrySelect(e.target.value);
	}

  render() {
    return (
      <div>
        <label>Country:<span className="required">&#42;</span></label>
        <select
        	value={this.props.country}
        	onChange={this.handleCountrySelectChange} >
          <option value="">Choose your country</option>
          <option value="German">German</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </select>
      </div>
    );
  }  
}

export default Country;