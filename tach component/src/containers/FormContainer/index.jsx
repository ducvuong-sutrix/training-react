import React, {Component} from 'react';
import SingleInput from '../../components/SingleInput'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      confPassword:'',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkRequired(value) {
    let emptyString = /^\s*$/;
    emptyString.test(value) ? alert('String is empty') : null ;
  }


  handleChange(e) {
    let {name, value} = e.target;
    console.log(value);
    switch(name) {
      case 'username':
          this.setState({ username: value });
          this.checkRequired(value);
          break;
      case 'password':
          this.setState({ password: value });
          this.checkRequired(value);
          break;
      case 'confPassword':
          this.setState({ confPassword: value });
          this.checkRequired(value);
          break;
      case 'email':
          this.setState({ email: value });
          this.checkRequired(value);
          break;
    }
  }

  handleSubmit() {
    console.log('submit');
  }

  render() {
    let {username, password, confPassword, email} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <SingleInput
          inputType={'text'}
          name={'username'}
          title={'Username'}
          placeholder={'Username'}
          controlFunc={this.handleChange}
          content={username}
        />
        <SingleInput
          inputType={'password'}
          name={'password'}
          title={'Password'}
          placeholder={'Password'}
          controlFunc={this.handleChange}
          content={password}
        />
        <SingleInput
          inputType={'password'}
          name={'confPassword'}
          title={'Confirm Password'}
          placeholder={'Confirm Password'}
          controlFunc={this.handleChange}
          content={confPassword}
        />
        <SingleInput
          inpurRef={'refEmail'}
          inputType={'email'}
          name={'email'}
          title={'Email'}
          placeholder={'Email'}
          controlFunc={this.handleChange}
          content={email}
        />
        <input
          type="submit"
          className="btn"
          value="Submit"/>
      </form>
    )
  }

}
export default FormContainer;
