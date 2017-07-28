import React, { Component } from 'react';

class Message extends Component {
  
  componentWillMount() {
    console.log('componentWillMount children');
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps children', nextContext, nextProps);

  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate children');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate children', nextProps, nextState);

    return this.props !== nextProps;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate children', prevState, prevProps);
  }

  componentDidMount() {
    console.log('componentDidMount children');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount children');
  }

  render() {
    
    return (
       <p>This is text in Component children {this.props.text}</p> 
    );
  }
} 

export default Message;