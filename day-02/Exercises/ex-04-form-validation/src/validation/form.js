import React from "react"
// import TextInput from "./text-input"
// import Validate from "./validation"

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			fields: {
				username: "",
				password: "",
				confirmPassword: "",
				email: "",
				phone: "",
				gender: "",
				country: "",
			},
			data: {
				gender: [
					["Male", "M"], 
					["Female", "F"], 
					["3D", "3D"]
				],
				country: [
          ['Viet Nam', 'VN'],
          ['Japan', 'JAV'],
          ['Singapore', 'SG'],
          ['United States', 'US'],
        ]
			},
			errors: {},
			messages: {				
				required: 'This field is required.',
	      minLength: 'Username must be at least to 6 characters.',
	      passwordFormat: 'Password must be at least 8 charactor, contain at leat 1 uppercase, 1 lowwercase and 1 specific key',
	      passwordConfirm: 'Password is not match',
	      emailFormat: 'Please enter a valid e-mail address',
	      phoneFormat: 'Phone must be formatted like: xxx-xxx-xxx(x)',
			},
			isChecked: 'M',
		};	
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({	
      fields
    });
  }

	handleSubmit(e) {
		e.preventDefault();
		let errors = this.checkValid(this.state.fields)
		this.setState({
			errors
		});		
	}

	checkValid(data) {
		let messages = this.state.messages;
		let errors = {};
		//Validate username
		if (data.username === '') {
			errors.username = messages.required;
		} else if (data.username.length < 6) {
			errors.username = messages.minLength;
		}
    //Validate password
    if (data.password === '') {
    	errors.password = messages.required;
    	// /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/
    } else if (!data.password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[a-zA-Z\d\W\s]{8,}$/)) {
      errors.password = messages.passwordFormat;
    }
    //Validate confirmPassword
    if (data.confirmPassword === '') {
      errors.confirmPassword = messages.required;
    }
    else if (data.password !== data.confirmPassword) {
    	errors.confirmPassword = messages.passwordConfirm;
    }
    //Valid email
    if (data.email === '') {
      errors.email = messages.required;
    }
    else if (!data.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    	errors.email = messages.emailFormat;
    }
    //Valid phone    
    if (data.phone !=='' && !data.phone.match(/^[0-9]{3}\-[0-9]{3}\-[0-9]{3,4}$/)) {
    	errors.phone = messages.phoneFormat;
    }    
    return errors;
	}

	renderRadio() {
		return this.state.data.gender.map(([name, value], key) => {
			let defaultChecked = (value === this.state.isChecked);
			return(
				<div className="radio" key={key}>
					<label >
						<input type="radio" name="gender" onChange={this.handleChange.bind(this, "gender")} defaultChecked={defaultChecked} value={value} id={value} name="gender"/>{name}
					</label>
				</div>
			)
		});
	}

	renderSelectCountry() {
		return this.state.data.country.map(([name, value], key) => {
			return (
				<option value={value} key={key}>{name}</option>
			)
		});
	}

	render() {
		let errors = this.state.errors;
		return (
			<form onSubmit={this.handleSubmit} className="col-md-4 col-md-offset-4">
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input type="text" className="form-control" name="username" value={this.state.fields.username} onChange={this.handleChange.bind(this, "username")} />
					{ errors.username && <span className="error-block">{ errors.username }</span>}
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" name="password" value={this.state.fields.password} onChange={this.handleChange.bind(this, "password")} />
					{ errors.password && <span className="error-block">{ errors.password }</span>}
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input type="password" className="form-control" name="confirmPassword" value={this.state.fields.confirmPassword} onChange={this.handleChange.bind(this, "confirmPassword")} />
					{ errors.confirmPassword && <span className="error-block">{ errors.confirmPassword }</span>}
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="text" className="form-control" name="email" value={this.state.fields.email} onChange={this.handleChange.bind(this, "email")} />
					{ errors.email && <span className="error-block">{ errors.email }</span>}
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone</label>
					<input type="text" className="form-control" name="phone" value={this.state.fields.phone} onChange={this.handleChange.bind(this, "phone")} />
					{ errors.phone && <span className="error-block">{ errors.phone }</span>}
				</div>
				<div className="form-group">
					<label htmlFor="gender">Gender</label>				
					{this.renderRadio()}					
				</div>
				<div className="form-group">
					<label htmlFor="country">Country</label>				
					<select className="form-control" name="country" onChange={this.handleChange.bind(this, "country")}>
						{this.renderSelectCountry()}
					</select>				
				</div>
				<input type="submit" className="btn btn-primary" value="Submit" />
			</form>
		)
	}
}
export default Form