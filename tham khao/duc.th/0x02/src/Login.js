import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    var data = ['test','1'];
    // var infomation = data.map(function(index, elem) {
    //   console.log(this);
    //   return 0;
    // })
    var myObj = this.props.userData;
    var a = [];
    Object.keys(myObj).forEach(function (key, index) {
      let obj = myObj[key];

      if (typeof obj === 'object') {
        var item = obj.map((value, i) =>(
          value + ', '
        ))
        a.push(<li className="text-left" key={index}>{key}: {item}</li>);
      } else {
        a.push(<li className="text-left" key={index}>{key}: {obj}</li>);
      }

    });
    // var infomation = data.map((value, key) => (
    //   <li key={key}>{value}</li>
    // ))
    return (
      <div className="container">
        <h3>User Infomation</h3>
        <ul>
        {a}
        </ul>
      </div>
    )
  }
}

export default Login;

