import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SmartForm />
      </div>
    );
  }
}
class SmartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: '',
        password: '',
        passwordconfirm: '',
        email: '',
        country: 'Japan',
        checked: false,
      },
      selectedOption: '',
      errors: {},
      required: 'This field is required.',
      minlength: 'Please enter a value greater than or equal to 6.',
      pwformat: 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one special character',
      pwconfirm: 'Password not match',
      emailformat: 'Please enter a valid email address'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({
      fields
    });
  }
  handleValidation() {
    let fields = this.state.fields,
        required = this.state.required,
        errors = {},
        formIsValid = true,
        username = fields["username"],
        password = fields["password"],
        passwordconfirm = fields["passwordconfirm"],
        email = fields["email"],
        gender = this.state.selectedOption;
    // Validate username
    if(username === '' || username === null) {
      formIsValid = false;
      errors["username"] = required;
    }else if(username.length < 6) {
      formIsValid = false;
      errors["username"] = this.state.minlength;
    }
    // Validate password
    if(password === '' || password === null) {
      formIsValid = false;
      errors["password"] = required;
    } else if(!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/)) {
      formIsValid = false;
      errors["password"] = this.state.pwformat;
    }
    // Validate password confirm
    if(passwordconfirm === '' || passwordconfirm === null) {
      formIsValid = false;
      errors["passwordconfirm"] = required;
    } else if(passwordconfirm !== password) {
      formIsValid = false;
      errors["passwordconfirm"] = this.state.pwconfirm;
    }
    // Validation email
    if(email === '' || email === null) {
      formIsValid = false;
      errors["email"] = required;
    } else if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      formIsValid = false;
      errors["email"] = this.state.emailformat;
    }
    // Valid gender
    if(gender === "" || gender === null) {
      formIsValid = false;
      errors["gender"] = required;
    }
    this.setState({
      errors: errors
    })
    return formIsValid;
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.handleValidation()) {
      alert('Form submitted');
    } else {
      alert('Form has errors');
    }
  }
  handleOptionChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }
  render() {
    return(
      <div>
        <Title title="Register Form"/>
        <form className="register-form" onSubmit={this.handleSubmit} noValidate>
          <fieldset>
            <div className="form-group">
              <label className="label">Username: </label>
              <input type="text"
                    value={this.state.fields["username"]}
                    onChange={this.handleChange.bind(this,"username")} />
              <Error for={this.state.errors["username"]}/>
            </div>
            <div className="form-group">
              <label className="label">Password: </label>
              <input type="password"
                    value={this.state.fields["password"]}
                    onChange={this.handleChange.bind(this,"password")} />
              <Error for={this.state.errors["password"]}/>
            </div>
            <div className="form-group">
              <label className="label">Password Confirm: </label>
              <input type="password"
                    value={this.state.fields["passwordconfirm"]}
                    onChange={this.handleChange.bind(this, "passwordconfirm")} />
              <Error for={this.state.errors["passwordconfirm"]}/>
            </div>
            <div className="form-group">
              <label className="label">Email: </label>
              <input type="email"
                    value={this.state.fields["email"]}
                    onChange={this.handleChange.bind(this, "email")} />
              <Error for={this.state.errors["email"]}/>
            </div>
            <div className="form-group">
              <label className="label">Gender: </label>
              <label>
                <input type="radio"
                      name="gender"
                      value="male"
                      checked={this.state.selectedOption === 'male'}
                      onChange={this.handleOptionChange} />
                Male</label>
              <label>
                <input type="radio"
                    name="gender"
                    value="famale"
                    checked={this.state.selectedOption === 'famale'}
                    onChange={this.handleOptionChange} />
              Female</label>
                <Error for={this.state.errors["gender"]}/>
            </div>
            <div className="form-group">
              <label className="label">Country: </label>
              <select className="country-list" value={this.state.fields["country"]} onChange={this.handleChange.bind(this, "country")} >

                <option value="VietNam">VietNam</option>
                <option value="Japan">Japan</option>
                <option value="ThaiLan">ThaiLan</option>
              </select>
              <p className="error">{this.state.errors["country"]}</p>
            </div>
            <div className="form-group">
              <input className="btn-submit" type="submit" value="Submit"/>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return(
      <h1>{this.props.title}</h1>
    );
  }
}

class Error extends Component {
  render() {
    return (
      <p className="error">{this.props.for}</p>
    );
  }
}
export default App;
