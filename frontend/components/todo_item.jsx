var React = require('react');

var DoneButton = require('./donebutton.jsx');

var TodoDetailView = require('./tododetailview.jsx')

var ToDoListItem = React.createClass({

getInitialState: function() {

return ({ visible: false

});

},

handleDestroy: function(id, e) {
  ToDoStore.destroy(id)
},

toggleVisibility: function(e)
{
  this.setState({visible: !this.state.visible})
},


render: function() {
  var extendedDisplay = "";
  if(this.state.visible)
  {
    extendedDisplay = <TodoDetailView id={this.props.id} body={this.props.body}/>
  }


  return (
    <div>

      <div onClick = {this.toggleVisibility}>
        {this.props.title}
      </div>
      <DoneButton id={this.props.id} done={this.props.done}/>
      <br></br>
      {extendedDisplay}
          <br></br>
    </div>

  )
}


});

module.exports = ToDoListItem;
