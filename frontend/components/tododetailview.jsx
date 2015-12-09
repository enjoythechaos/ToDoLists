var React = require('react');

var DoneButton = require('./donebutton.jsx');

// var StepStore = require('../stores/step_store.js')

var TodoDetailView = React.createClass({
  handleDestroy: function(id, e) {
    debugger;
    ToDoStore.destroy(id)
  },

  // getSteps: function() {
  //   StepStore.fetch(this.props.id)
  //
  // },


  render: function() {
    // var steps = getSteps();


    return (
      <div>
        <div>
          {this.props.body}
        </div>
        <input type="submit" value="Delete Item" onClick={this.handleDestroy.bind(this, this.props.id)}/>
          <div>

          </div>
      </div>
    )
  }






});

module.exports = TodoDetailView;
