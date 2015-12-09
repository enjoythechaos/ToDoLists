var React = require('react');
var ToDoStore = require('./todo_store.js');

var _steps = {};
var _callbacks = [];

var StepStore = {
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
    return _steps;
  },

  fetch: function(todoId) {
    $.get("/api/todos/" + todoId + "/steps", {}, function(result) {
      _steps = result;
      StepStore.changed();
    })
  },

  create: function(todoId, step) {
    $.post("/api/todos/" + todoId + "/steps", {step: step}, function(step){
      _steps[todoId].push(step);
      StepStore.changed();
    })
  },

  destroy: function(todoId, id) {
    var idx = -1;
    for (var i = 0; i < _steps.length; i++) {
      if (_steps[todoId][i].id === id) {
        idx = i;
        break;
      }
    }

    if (idx != -1) {
      $.ajax({
        url: "/api/todos/" + todoId + "/steps",
        type: "DELETE",
        success: function() {
          _steps[todoId].splice(idx, 1);
          ToDoStore.changed();
        }
      })
    }
  },

  toggleDone: function(todoId, id) {
    var idx = -1;
    for (var i = 0; i < _steps.length; i++) {
      if (_steps[todoId][i].id === id) {
        idx = i;
        break;
      }
    }
    if (idx != -1) {
      var step = _steps[todoId][idx];
      step.done = !step.done;
      $.ajax({
        url: "/api/todos/" + todoId + "/steps",
        type: "PATCH",
        data: { step: step },
        success: function() {
          _steps[todoId][idx] = step;
          StepStore.changed();
        },
        error: function() {
          console.log("This didn't work.")
        }
      })
    }
  }
};

module.exports = StepStore;
