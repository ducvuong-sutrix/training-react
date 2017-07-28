import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import registerServiceWorker from './registerServiceWorker';

const MessagesIndex ='alo alo';
ReactDOM.render(
  <div>
    <App abc="jkdjskadjk" MS={MessagesIndex} />
    <Form messages="haha" />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
