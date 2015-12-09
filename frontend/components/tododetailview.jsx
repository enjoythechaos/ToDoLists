var React = require('react');
var DoneButton = require('./donebutton.jsx');
var StepStore = require('../stores/step_store.js');

var TodoDetailView = React.createClass({
  getInitialState: function() {
    return {stepList: []};
  },

  getSteps: function() {
    this.setState({stepList: StepStore.all(this.props.todoId)});
  },

  componentDidMount: function() {
    ToDoStore.addChangeHandler(this.setList);
    ToDoStore.fetch(this.props.todoId);
  },

  componentWillUnmount: function() {
    ToDoStore.removeChangeHandler(this.setList);
  },

  handleDestroy: function(e) {
    e.preventDefault();
    var todoId = this.props.todoId;
    ToDoStore.destroy(todoId);
  },

  render: function() {
    var steps = getSteps();

    return (
      <div>
        <div>
          {this.props.body}
        </div>
        <div>
          {this.state.stepList.map(function(step){return <div><Step description={step.description} todoId={step.todo_id} id={step.id}/></div>})}
        </div>
        <input type="submit" value="Delete Item" onClick={this.handleDestroy}/>
      </div>
    )
  }
});

module.exports = TodoDetailView;

// <div>
//   {this.props.body}
// </div>
// {return this.state.stepList.map(function(step){return <div><Step description={step.description} todoId={step.todo_id} id={step.id}/></div>})}
// <input type="submit" value="Delete Item" onClick={this.handleDestroy.bind}/>
// <div>
// </div>
