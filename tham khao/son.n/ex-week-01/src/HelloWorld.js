import React, {Component} from 'react';

class HelloWorld extends Component{
  componentWillMount(){
    console.log('HelloWorld componentWillMount');
  }

  componentWillReceiveProps(nextProps){
    console.log('HelloWorld componentWillReceiveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState){
    console.log('HelloWorld componentWillUpdate', nextProps, nextState);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('HelloWorld shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    console.log('HelloWorld componentDidUpdate', prevProps, prevState);
  }

  componentDidMount(){
    console.log('HelloWorld componentDidMount');
  }

  componentWillUnmount(){
    console.log('HelloWorld componentWillUnmount');
  }

  render(){
    return(
      <h4>Ex 02: {this.props.text}</h4>
    );
  }
}

export default HelloWorld;
