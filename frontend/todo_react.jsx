window.ToDoStore = require('./stores/todo_store.js');
var ToDoList = require('./components/todo_list.jsx');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <ToDoList/>,
  document.getElementById('root')
);
