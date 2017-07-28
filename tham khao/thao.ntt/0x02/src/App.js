import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      phone: '',
      contry: 'Hồ Chí Minh',
      bio: '',
      gender:'male',
      hobbies: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  isValid = function(input){
    //check required field
  }

  handleSubmit(event){
    //console.log(this.state.hobbies);
    event.preventDefault();
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

  }

  handleUsernameInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    let length = value.length;

    if (length > 0 && length < 6) {
      document.getElementsByClassName('username_error')[0].innerHTML = 'Username must at least <strong>6</strong> characters.';
    }else{
      document.getElementsByClassName('username_error')[0].innerHTML = '';
    }
  }

  handlePasswordInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;
    this.setState({
      [name]: value
    });
    let length = value.length;
    if(!regex.test(value) && length > 0){
      document.getElementsByClassName('password_error')[0].innerHTML = 'At least 1 <strong>(A-Z)</strong> letter. At least 1 <strong>(a-z)</strong> letter.At least 1 of these <strong>!,@,$,%,^,&,*</strong> characters. And Password must at least <stong>8</strong> letter.';
    }else{ 
      document.getElementsByClassName('password_error')[0].innerHTML = '';
    }
  }

  handleConfirmPasswordInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    
    const password = this.state.password;
    
    if(password !== value){
      document.getElementsByClassName('confirm_password_error')[0].innerHTML = 'The password confirm was wrong.';
    }else{ 
      document.getElementsByClassName('confirm_password_error')[0].innerHTML = "<span class='green'>The password comfirm was right!</span>";
    }
  }

  handleEmailInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({
      [name]: value
    });
    let length = value.length;
    if(!regex.test(value) && length > 0){
      document.getElementsByClassName('email_error')[0].innerHTML = 'The email was wrong. Please enter format type, example: name@domain.com';
    }else{ 
      document.getElementsByClassName('email_error')[0].innerHTML = '';
    }
  }
  //;
  handlePhoneInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const regex = /(\d{4}-\d{3}-\d{3}$)|(\d{4}-\d{4}-\d{4}$)/;
    this.setState({
      [name]: value
    });
    let length = value.length;
    if(!regex.test(value) && length > 0){
      document.getElementsByClassName('phone_error')[0].innerHTML = 'The phone was wrong. Please enter format type, example: xxxx-xxx-xxx(x)';
    }else{ 
      document.getElementsByClassName('phone_error')[0].innerHTML = '';
    }
  }

  render() {
    return (
      <div>
        <form className="form-register" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username<span className="required">*</span>:</label>
            <input 
              className="text-input"
              type="text" 
              name="username"
              value={this.state.username}
              onChange={this.handleUsernameInputChange.bind(this)}
              placeholder="Enter your username" />
          </div>
          <div className="username_error error"></div>

          <div className="form-group">
            <label>Password<span className="required">*</span>:</label>
            <input 
              className="text-input"
              type="password" 
              name="password"
              value={this.state.password}
              onChange={this.handlePasswordInputChange.bind(this)} />
          </div>
          <div className="password_error error"></div>

          <div className="form-group">
            <label>Confirmation Password<span className="required">*</span>:</label>
            <input 
              className="text-input"
              type="password" 
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordInputChange.bind(this)} />
          </div>
          <div className="confirm_password_error error"></div>

          <div className="form-group">
            <label>Email<span className="required">*</span>:</label>
            <input 
              className="text-input"
              type="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleEmailInputChange.bind(this)} 
              placeholder="name@domain.com"/>
          </div>
          <div className="email_error error"></div>

          <div className="form-group">
            <label>Email<span className="required">*</span>:</label>
            <input 
              className="text-input"
              type="text" 
              name="phone"
              value={this.state.phone}
              onChange={this.handlePhoneInputChange.bind(this)} 
              placeholder="xxxx-xxx-xxx(x)"/>
          </div>
          <div className="phone_error error"></div>

          <div className="form-group gender">
            <label>Gender<span className="required">*</span>:</label>
            <input name="gender" type="radio" value="male" onChange={this.handleChange} />  <span>Male</span>
            <input name="gender" type="radio" value="female" onChange={this.handleChange}/> <span>Female</span>
          </div>

          <div className="form-group selector">
            <label> Choose your contry: </label>
            <select name="contry" value={this.state.contry} onChange={this.handleChange} className="text-input">
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Bình Định">Bình Định</option>
            </select>
          </div>

          <div className="form-group">
            <label>Bio </label>
            <textarea name="bio" value={this.state.bio} onChange={this.handleChange} className="textarea" />
          </div>

          <div className="form-group hobbies">
            <label>Hobbies:</label>
             <input name="hobbies" type="radio" value="listen to music" onChange={this.handleChange} />  <span>Listen to music</span>
            <input name="hobbies" type="radio" value="read books" onChange={this.handleChange}/> <span>Read books</span>
            <input name="hobbies" type="radio" value="play games" onChange={this.handleChange}/> <span>Play games </span>
          </div>

          <div className="btn-submit">
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
