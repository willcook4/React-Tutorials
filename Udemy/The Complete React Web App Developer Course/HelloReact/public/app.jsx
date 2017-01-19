var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstname = 'Bill';

// var message = 'This is the default message!';

ReactDOM.render(
  <Greeter name={firstname}/>,
  document.getElementById('app')
);