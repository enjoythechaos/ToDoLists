var React = require('react');
var ToDoStore = require('../stores/todo_store.js');
var ToDoListItem = require('./todo_item.jsx');
var ToDoForm = require('./todo_form.jsx');

var ToDoList = React.createClass({
  getInitialState: function() {
    return {list: []};
  },

  setList: function() {
    this.setState({list: ToDoStore.all()});
  },

  componentDidMount: function() {
    ToDoStore.addChangeHandler(this.setList);
    ToDoStore.fetch();
  },

  componentWillUnmount: function() {
    ToDoStore.removeChangeHandler(this.setList);
  },

  render: function() {
    var listItems = this.state.list;
    return (
      <div>
        <div>
            {
              listItems.map(function(toDoItem){return <ToDoListItem title={toDoItem.title} body={toDoItem.body} id={toDoItem.id} done={toDoItem.done}/>})
            }
        </div>

        <div>
          <ToDoForm/>

        </div>
      </div>
  )

  }
});

module.exports = ToDoList;
