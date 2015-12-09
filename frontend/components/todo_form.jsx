var React = require('react');
var ToDoStore = require('../stores/todo_store.js');

var ToDoForm = React.createClass({
  getInitialState: function () {
    return {title: "", body: ""};
  },
  //
  updateTitle: function(e) {
    this.setState({title: e.target.value});
  },
  //
  updateBody: function(e) {
    this.setState({body: e.target.value});
  },
  //
  //
  handleSubmit: function(e) {
    e.preventDefault();
    ToDoStore.create({title: this.state.title, body: this.state.body, done: false});
    this.setState({title: "", body: ""});
  },
  //
  render: function() {
    return (
      <form>
        <input type="text" value={this.state.title} onChange={this.updateTitle}/>
        <input type="text" value={this.state.body} onChange={this.updateBody}/>
        <input type="submit" value = "Submit Form" onClick={this.handleSubmit}/>
      </form>
    );
  }
});

module.exports = ToDoForm;
