var React = require('react');

var _todos = [];
var _callbacks = [];

var ToDoStore = {
  changed: function() {
    _callbacks.forEach(function(cb){
      cb();
    });
  },

  addChangeHandler: function(ch) {
    _callbacks.push(ch);
  },

  removeChangeHandler: function(ch) {
    var idx = -1;
    for (var i=0; i < _callbacks.length; i++) {
      if (_callbacks[i] === ch) {
        idx = i;
      }
    }
    if (idx != -1) {
      _callbacks.splice(idx, 1);
    }
  },

  all: function() {
    return _todos;
  },

  fetch: function() {
    $.get("/api/todos", {}, function(result) {
      _todos = result;
      ToDoStore.changed();
    })
  },

  create: function(todo) {
    $.post("/api/todos", {todo: todo}, function(todo) {
      _todos.push(todo);
      ToDoStore.changed();
    })
  },

  destroy: function(id) {

    var idx = -1;
    for (var i = 0; i < _todos.length; i++) {
      if (_todos[i].id === id) {
        idx = i;
        break;
      }
    }

    if (idx != -1) {
      $.ajax({
        url: "/api/todos/" + id,
        type: "DELETE",
        success: function() {
          _todos.splice(idx, 1);
          ToDoStore.changed();
        }
      })
    }
  },

  toggleDone: function(id) {
    var idx = -1;
    for (var i = 0; i < _todos.length; i++) {
      if (_todos[i].id === id) {
        idx = i;
        break;
      }
    }
    if (idx != -1) {
      var todo = _todos[idx];
      todo.done = !todo.done;
      $.ajax({
        url: "/api/todos/" + id.toString(),
        type: "PATCH",
        data: { todo: todo },
        success: function() {
          _todos[idx] = todo;
          ToDoStore.changed();
          console.log("We think the thing changed")
        },
        error: function() {
          console.log("This didn't work.")
        }
      })
    }
  }
}

module.exports = ToDoStore;
