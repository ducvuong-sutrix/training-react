import React, { Component } from 'react';

function validateName(name) {
  return (/^[a-zA-Z]+[a-zA-Z0-9\_]{4,}[a-zA-Z0-9]+$/).test(name);
}

function validatePassword(password) {
  return (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[a-zA-Z\d\W\s]{8,32}$/).test(password);
}
function isMatch(password, confirm) {
  return password === confirm;
}

function validateEmail(email) {
  return (/^[\w\S]+@[\w\S]+\.[\w\S]+$/).test(email);
}

function validatePhone(phone) {
  return (/^[0-9]{3}\-[0-9]{3}\-[0-9]{3,4}$/).test(phone);
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Register',
      data: {
        gender: [
          ['Male', 'male'],
          ['Female', 'female']
        ],
        country: [
          ['Viet Nam', 'VN'],
          ['Japan', 'JP'],
          ['United States', 'US'],
          ['Korea', 'KR'],
          ['France', 'FR']
        ],
        programming_languages : ['Jquery', 'Vue', 'React']
      },
      error: [],
      errorState: {
        username: false,
        email: false,
        password: false,
        phone: false
      },
      login: false,
      userGender: '',
      userLanguages: [],
    }

  }

  submitRegister(e) {
    // console.log(e);
    // console.log(this.refs.formRegister);
    e.preventDefault();
    var username = this.refs.username.value,
        password = this.refs.password.value,
        confirmPassword = this.refs.confirmPassword.value,
        email = this.refs.email.value,
        phone = this.refs.phone.value,
        error = [],
        errorState = {},
        userData = {};
    // if (!this.refs.username.value)
    if (username === '') {
      error.push('Please fill your username');
      errorState.username = true;
    } else if(!validateName(username)) {
      error.push('Username must be at least 6 charactor and doesn\' contain specific charactor');
      errorState.username = true;
    } else {
      errorState.username = false;
    }

    if (email === '') {
      error.push('Please fill your email');
      errorState.email = true;
    } else if(!validateEmail(email)) {
      error.push('Email must be formatted like: test@gmail.com');
      errorState.email = true;
    } else {
      errorState.email = false;
    }

    if (password === '') {
      error.push('Please fill your password');
      errorState.password = true;
    } else if(!validatePassword(password)) {
      error.push('Password must be at least 8 charactor, contain at leat 1 uppercase, 1 lowwercase and 1 specific key');
      errorState.password = true;
    } else {
      errorState.password = false;
    }

    if (phone !== '' && !validatePhone(phone)) {
      error.push('Phone must be formatted like: xxx-xxx-xxx(x)')
      errorState.phone = true;
    } else {
      errorState.phone = false;
    }

    if(!isMatch(password, confirmPassword)) {
      error.push('Your password is not match');
    }

    if (error.length > 0) {
      this.setState({
        error: error,
        errorState: errorState
      })
    } else {

      // console.log('form', this.refs.form);
      // console.log(this.refs.form.gender);

      userData = {
        'username': username,
        'email': email,
        'password': password,
        'phone': phone,
        'country': this.refs.country.value,
        'gender': this.refs.formRegister.gender.value,
        'programming_languages' :this.state.userLanguages
      }
      // userData = {
      //   'username': 'Setsuna',
      //   'email': 'asg@gmail.com',
      //   'password': '12345',
      //   'phone': '333-333-333',
      //   'country': 'VN',
      //   'gender': 'male',
      //   'programming_languages': ['vue' ,'react']
      // }
      // console.log('userData', userData);
      this.props.onRegisted(userData);
    }



  }

  handleCheckboxChange(e) {
    // console.log(this.refs.formRegister);
    var target = e.target,
        value  = target.value,
        userLanguages = this.state.userLanguages;

    if (target.checked) {
      userLanguages.push(value);
    } else {
      userLanguages.splice(userLanguages.indexOf(value), 1);
    }
    // console.log(userLanguages);
    this.setState({
      userLanguages: userLanguages
    })
  }

  setUserGender(e) {


  }

  setUserLanguges(e) {

  }

  render() {
        // console.log(this.state.error);
    var errorList = null, isError = false;
    if (this.state.error.length > 0) {
      isError = true;
      errorList = this.state.error.map((value, key) => (
        <li key={key}>{value}</li>
      ))
    }
    var inputClass = isError ? "form-control input-error" : "form-control";

    return (
      <div className="container register">
        <div>
          <ul className={"list-errors " + (isError ? '' : 'hidden')}>
            {errorList}
          </ul>
        </div>
        <form className="form-register" ref="formRegister" onSubmit={this.submitRegister.bind(this)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" ref="username" className={"form-control " + (this.state.errorState.username ? 'input-error' : '')} placeholder="Your Name"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" ref="email" className={"form-control " + (this.state.errorState.email ? 'input-error' : '')} placeholder="Your Email"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" ref="password" className={"form-control " + (this.state.errorState.password ? 'input-error' : '')} placeholder="Your Password"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password: </label>
                <input type="password" id="confirm-password" ref="confirmPassword" name="confirm-password" className={"form-control " + (this.state.errorState.password ? 'input-error' : '')} placeholder="Confirm Password"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Phone Number: </label>
                <input type="text" id="phone" ref="phone" name="phone" className={"form-control " + (this.state.errorState.phone ? 'input-error' : '')} placeholder="Phone Number"/>
              </div>
            </div>
            <div className="col-md-6">
              <fieldset className="form-group" ref="gender" >
                <legend>Radio buttons</legend>
                {
                  this.state.data.gender.map(([text, value], key) =>(
                    <div className="form-check form-check-inline" key={ key }>
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="gender" id={value} value={value} /> {text}
                      </label>
                    </div>
                  ))
                }
              </fieldset>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="hobby">Country</label>
                <select ref="country" className="form-control" id="hobby">
                  <option value=''>Please select your country</option>
                  {
                    this.state.data.country.map(([text, value], key) =>(
                      <option key={ key } value={ value }>{ text }</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group" ref="programming_languages">
                <legend>Programming Languges</legend>
                {
                  this.state.data.programming_languages.map((value, key) => (
                    <div key={key} className="form-check form-check-inline">
                      <label className="form-check-label">
                        <input onChange={this.handleCheckboxChange.bind(this)} name="programming_languages" className="form-check-input" type="checkbox" id={value} value={value} /> {value}
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-md-12 text-right" >
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Register;
