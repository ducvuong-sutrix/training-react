import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.phonenumber = this.phonenumber.bind(this);
  }
  phonenumber(){
    let phone = this.refs.phone.value;
    var phoneno = /^-{0,1}\d*\.{0,1}\d+$/;
    if(phone.match(phoneno)){
      return true;
    }else{
      alert("Phone wrong");
      this.refs.phone.value='';
      return false;
    }
  }
  ValidateEmail(email){
    let emailno = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(emailno)){
      return (true)
    }
    alert("You have entered an invalid email address!")
    this.refs.email.value='';
    return (false)
  }
  validEmail(password, confirm){
    if(password === confirm){
      alert('Confirm Email Correct')
      return true;
    }else{
      alert('Confirm Email Wrong...!')
      this.refs.password.value='';
      this.refs.confirm.value='';
      return false;
    }
  }
  CheckPassword(password){
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(password.match(passw)){
      alert('Password Correct')
      return true;
    }else{
      alert('Password Wrong...!')
      this.refs.password.value='';
      return false;
    }
  }

  handleSubmit(event) {
    let name = this.refs.name.value;
    let password = this.refs.password.value;
    let confirm = this.refs.confirm.value;
    let email = this.refs.email.value;
    let phone = this.refs.phone.value;

    var user = name+' '+password+' '+confirm+' '+email+' '+phone ;
    console.log(this);
    console.log(user);
    this.ValidateEmail(email);
    this.validEmail(password, confirm);
    this.CheckPassword(password);
    if (this.ValidateEmail(email) && this.validEmail(password, confirm) && this.CheckPassword(password)) {
      alert('Thank you for complete');
      this.refs.abc.value = '';
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Register new account
        </p>
        <form refs='abc' onSubmit={this.handleSubmit}>
          <label>
            <p>Name :</p>
            <input type="text" ref='name' />
          </label>
          <label>
            <p>Password :</p>
            <input type="password" ref='password' />
          </label>
          <label>
            <p>Confirm password :</p>
            <input type="password" ref='confirm'/>
          </label>
          <label>
            <p>Email :</p>
            <input type="text" ref='email' />
          </label>
          <label>
            <p>Phone :</p>
            <input type="text" ref='phone' onChange={this.phonenumber} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;

