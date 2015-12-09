var React = require('react');
var ToDoStore = require('../stores/todo_store.js');

var DoneButton = React.createClass({



render: function () {

var buttonText = this.props.done ? "Undo" : "Done";




return (

  <button type = "submit" onClick={this.handleDone}>{buttonText}</button>)

},

handleDone: function (e) {

  e.preventDefault();
  ToDoStore.toggleDone(this.props.id);
  


},






});

module.exports = DoneButton;
