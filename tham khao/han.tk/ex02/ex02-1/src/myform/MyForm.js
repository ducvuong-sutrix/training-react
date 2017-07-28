import React, { Component } from 'react';

import Username from './Username';
import Password from './Password';
import ConfirmPassword from './ConfirmPassword';
import Email from './Email';
import Phone from './Phone';
import Gender from './Gender';
import Country from './Country';
import Bio from './Bio';
import Hobbies from './Hobbies';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        name: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      },
      confirmPassword: {
        value: '',
        isValid: false
      },
      email: {
        value: '',
        isValid: false
      },
      phoneNumber: {
        value: '',
        isValid: false
      },
      genderOption: '',
      country: '',
      hobbies: []
    }

    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleConfirmPasswordInput = this.handleConfirmPasswordInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.hanldePhoneInput = this.hanldePhoneInput.bind(this);
    this.handleGenderInput = this.handleGenderInput.bind(this);
    this.handleCountrySelect = this.handleCountrySelect.bind(this);
    this.handleHobbiesCheck = this.handleHobbiesCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameInput(name, isValid) {
    this.setState({
      username: {
        name: name,
        isValid: isValid
      }
    });
  }

  handlePasswordInput(password, isValid) {
    this.setState({
      password: {
        value: password,
        isValid: isValid
      }
    });
  }

  handleConfirmPasswordInput(confirmPassword, isValid) {
    this.setState({
      confirmPassword: {
        value: confirmPassword,
        isValid: isValid
      }
    });
  }

  handleEmailInput(email, isValid) {
    this.setState({
      email: {
        value: email,
        isValid: isValid
      }
    });
  }

  hanldePhoneInput(phoneNumber, isValid) {
    this.setState({
      phoneNumber: {
        value: phoneNumber,
        isValid: isValid
      }
    });
  }

  handleGenderInput(gender) {
    this.setState({
      genderOption: gender
    });
  }

  handleCountrySelect(country) {
  	this.setState({
      country: country
    });
  }

  handleHobbiesCheck(hobbies) {
  	this.setState({
  		hobbies: hobbies
  	});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.username.isValid &&
        this.state.password.isValid &&
        this.state.confirmPassword.isValid &&
        this.state.email.isValid &&
        this.state.phoneNumber.isValid &&
        this.state.genderOption &&
        this.state.country &&
        this.state.hobbies.length) {
      alert('Submitted!');
      this.setState({
        username: {
          name: '',
          isValid: false
        },
        password: {
          value: '',
          isValid: false
        },
        confirmPassword: {
          value: '',
          isValid: false
        },
        email: {
          value: '',
          isValid: false
        },
        phoneNumber: {
          value: '',
          isValid: false
        },
        genderOption: '',
        country: 'no',
        hobbies: []
      }); 
    }
  }

  render() {
    return (        
      <form className="MyForm" onSubmit={this.handleSubmit} noValidate>
        <Username 
          username={this.state.username}
          onUsernameInput={this.handleUsernameInput}/>
        <Password
          password={this.state.password}
          onPasswordInput={this.handlePasswordInput} />
        <ConfirmPassword
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          onConfirmPasswordInput={this.handleConfirmPasswordInput} />
        <Email
          email={this.state.email}
          onEmailInput={this.handleEmailInput} />
        <Phone
          phoneNumber={this.state.phoneNumber}
          onPhoneInput={this.hanldePhoneInput} />
        <Gender
        	genderOption={this.state.genderOption}
          onGenderInput={this.handleGenderInput} />
        <Country
        	country={this.state.country}
        	onCountrySelect={this.handleCountrySelect} />
        <Bio ref="bio" />
        <Hobbies
          hobbies={this.state.hobbies}
        	onHobbyCheck={this.handleHobbiesCheck} />
        <p style={{color: 'black'}}><span className="required">&#42;</span> : <strong>Required</strong></p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MyForm;