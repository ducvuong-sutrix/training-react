import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const validate = [
  {
    title: 'username',
    length: 8,
    regex: /^[0-9a-zA-Z]{6,}$/i,
    noti: 'username at least 6 chars!'
  },
  {
    title: 'password',
    length: 8,
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*]).{8,16}$/i,
    noti: 'Password must have 1 uppercase, 1 special char, 1 lowercase, min 8 chars'
  },
  {
    title: 'confirmpassword',
    length: 8,
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*]).{8,16}$/i,
    noti: 'Confirm password must same with password!'
  },
  {
    title: 'email',
    length: 6,
    regex: /^([\w.%+-]+)@([\w-]+\.)+([\w]{6,})$/i,
    noti: 'Example: abc@email.com'
  },
  {
    title: 'phone',
    length: 9,
    regex: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{3,4}$/i,
    noti: 'Input must be numbers! Phone example: xxx-xxx-xxx(x)'
  },
  // {
  //   title: 'phoneNumber',
  //   length: '9',
  //   regex: /^[0-9]{9,10}$/i,
  //   noti: 'Input must be numbers and at least 9 numbers!'
  // }
];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmpassword: '',
      email: '',
      phone: '',
      gender: 'Male',
      country:'VI',
      bio: '',
      music: '',
      fo3: ''
    };
  }
  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var i;
    console.log(this.state);
    for(i=0;i<validate.length;i++){
      if(name === validate[i].title){
        if(value.match(validate[i].regex) !== null){
          target.nextSibling.style.display = "none";
        }
        else{
          console.log(validate[i].noti);
          target.nextSibling.innerHTML = validate[i].noti;
          target.nextSibling.style.display = "block";
        }
      }
    }
    // if(name === 'phone'){
    //   if(value.length === 3 || value.length === 7){
    //     value = value + '-'
    //   }
    // }
    console.log(value);
    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    var state = this.state;
    if(state.username.length < 6){
      alert('username at least 6 char!');
    }
    else if(state.password.match(validate[1].regex) === null){
      alert('password must have 1 uppercase, 1 special char, 1 lowercase, min 8 chars');
    }
    else if(state.password !== state.confirmpassword){
      alert('Confirm password must same password!');
    }
    else if(state.email.match(validate[2].regex) === null){
      alert('Email example: abc@email.com');
    }
    else if(state.phone.match(validate[3].regex) === null){
      alert('Phone example: xxx-xxx-xxx(x)');
    }
    else if(state.music === '' && state.fo3 === ''){
      alert('Check at least 1 hobbie!');
    }
    console.log('username: '+ state.username + '\n password: '+ state.password + '\n email: '+ state.email + '\n gender: ' + state.gender + '\n state.country' + '\n bio: ' + state.bio + '\n Hobbies: ' + state.FO3 + ' & ' + state.music);
  }
  hobbiesCheckbox = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(target.checked === true){
      this.setState({
        [name]: value
      });
    }
    else{
      value = '';
      this.setState({
        [name]: value
      });
    }
    console.log('target: '+ target + 'name: ' + name + ' value: ' + value);
  }
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <form onSubmit={this.handleSubmit}>
      <input className="input left" name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
      <p className="hide warning"></p>
      <br />
      <input className="input left" name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
      <p className="hide warning"></p>
      <br />
      <input className="input left" name="confirmpassword" type="password" value={this.state.confirmpassword} onChange={this.handleChange} placeholder="Confirm Password" />
      <p className="hide warning"></p>
      <br />
      <input className="input left" name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
      <p className="hide warning"></p>
      <br />
      <input className="input left" name="phone" type="text" value={this.state.phone} onChange={this.handleChange} placeholder="Phone number" />
      <p className="hide warning"></p>
      <br />
      <div className="left">
      Gender:
      <input type="radio" name="gender" checked={this.state.gender==='Male'} defaultValue="Male" onChange={this.handleChange} />Male
      <input type="radio" name="gender" checked={this.state.gender==='Female'} defaultValue="Female" onChange={this.handleChange} />Female<br />
      </div><br />
      <div className="left">
      Country:
      <select name="country" value={this.state.country} onChange={this.handleChange}>
      <option value="VI">Viet Nam</option>
      <option value="US">US</option>
      <option value="UK">UK</option>
      </select>
      </div><br />
      <textarea className="input left" name="bio" value={this.state.bio} onChange={this.handleChange} placeholder="Bio" /><br />
      <div className="left">
      Hobbies:
      <input type="checkbox" name="music" value="Music" onChange={this.hobbiesCheckbox} />Music
      <input type="checkbox" name="fo3" value="Fo3" onChange={this.hobbiesCheckbox} />FO3
      </div>
      <input className="button" type="submit" value="Submit" />
      </form>
      </div>
      );
  }
}

export default App;
