var React = require('react');
var ToDoStore = require('../stores/todo_store.js');

var DoneButton = React.createClass({
  handleDone: function (e) {
    e.preventDefault();
    ToDoStore.toggleDone(this.props.todoId);
  },

  render: function () {
    var buttonText = this.props.done ? "Undo" : "Done";
    return (<button type = "submit" onClick={this.handleDone}>{buttonText}</button>);
  }
});

module.exports = DoneButton;
