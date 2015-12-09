var React = require('react');

var Step = React.createClass({
  handleDestroy: function(e) {
    e.preventDefault();
    var todoId = this.props.todoId;
    var stepId = this.props.stepId;
    StepStore.destroy(todoId, stepId);
  },

  handleDone: function (e) {
    e.preventDefault();
    var todoId = this.props.todoId;
    var stepId = this.props.stepId;
    ToDoStore.toggleDone(todoId, stepId);
  },

  render: function() {
    var buttonText = this.props.done ? "Undo" : "Done";
    return (
        <div>
          {this.props.description}
          <button type = "submit" onClick={this.handleDone}>{buttonText}</button>)
          <input type="submit" value="Delete Item" onClick={this.handleDestroy}/>
        </div>
    );
  }
});

module.exports = Step;
