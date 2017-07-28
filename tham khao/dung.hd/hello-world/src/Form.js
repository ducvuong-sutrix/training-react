import React, { Component } from 'react';
import './Form.css';
const pattern = {userName:{length:6,pattern:''},
                  PassWord:{length:8,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*]).{8,16}$/i},
                  Confirmfw:{length:8,pattern:''},
                  Email:{length:8,pattern:/^[a-z]+@[a-z]+\.[a-z]{1,4}$/i},
                  Phone:{length:8,pattern:/^[0-9]{10,11}$/i},
                  Country:{length:'',pattern:''},
                  Bio:{length:8,pattern:''},
                  Hobbies:{length:8,pattern:''}
                };
const messagesInvalid = {userName:'độ dài phải lớn hơn 8',PassWord:'sai yêu câu nhập vào'};

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {userName: '',
                  PassWord:'',
                  Confirmfw:'',
                  Email:'',
                  Phone:'',
                  Country:'VietNam',
                  Bio:'',
                  Hobbies:''
                };
  }

  handleChanges1 = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const validate = pattern[name];
    this.setState({[name]:value});
    console.log(value);
    if(validate.length)
    {
      if (value.length < validate.length)
      {
        target.nextSibling.innerHTML = messagesInvalid.userName;
      }
      else if (RegExp(validate.pattern).test(value) === false)
      {
        target.nextSibling.innerHTML = messagesInvalid.PassWord;
      }else
      {
        target.nextSibling.innerHTML = '';
        console.log(value);
      }
    }
     /*if(validate.pattern === '')
        return;
      if (RegExp(validate.pattern).test(value) === false)
      {
        target.nextSibling.innerHTML = messagesInvalid.PassWord;
      }else
      {
        target.nextSibling.innerHTML = '';
        console.log(value);
      }*/
  }

  handleButton = (e) => {
    this.setState({userName: e.target.userName});
    console.log(`duoc nhap vao tu text box ${this.state.userName}`);
  }

  shouldComponentUpdate(nextProps, nextState){
    // if(this.state.userName === nextState.userName)
    // {
    //   return false;
    // }
    return true;
  }

  render(){
    return(
      <div className="Form">
        <form>
          <label>User Name: </label>
          <input type="text" value={this.state.userName} name="userName" onChange={this.handleChanges1}/>
          <p></p>
          <label>PassWord: </label>
          <input type="PassWord" value={this.state.PassWord} name="PassWord" onChange={this.handleChanges1}/>
          <p></p>
          <label>Confirm PW: </label>
          <input type="PassWord" value={this.state.Confirmfw} name="Confirmfw" onChange={this.handleChanges1}/>
          <p></p>
          <label>Email: </label>
          <input type="text" value={this.state.Email} name="Email" onChange={this.handleChanges1}/>
          <p></p>
          <label>Phone: </label>
          <input type="text" value={this.state.Phone} name="Phone" onChange={this.handleChanges1}/>
          <p></p>
          <label>Gender: </label>
          <input type="radio" value={this.state.value} name="radio" onChange={this.handleChanges1}/> Male
          <p></p>
          <input type="radio" value={this.state.value} name="radio" onChange={this.handleChanges1}/> Female
          <p></p>
          <label>Country: </label>
          <select value={this.state.Country} onChange={this.handleChanges1} name="Country">
            <option value="VietNam" >Việt Nam</option>
            <option value="UnitedKingDom">United KingDom</option>
            <option value="UnitedStates">United States</option>
            <option value="trungquoc">Cẩu :))))</option>
          </select>
        </form>
        <button onClick={this.handleButton}>Click</button>
      </div>
    );
  }
}

export default Form;
