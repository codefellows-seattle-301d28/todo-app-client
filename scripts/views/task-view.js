'use strict';

var app = app || {};

(function(module) {
  const taskView = {};

  function reset() {
    $('.container').hide();
    $('.navigation').slideDown(350);
  }

  taskView.initIndexPage = function(ctx) {
    reset();
    console.log('in init index');
    $('.task-view').show();
    $('#task-list').empty();
    app.Task.all.map(task => $('#task-list').append(task.toHtml()));
  }

  taskView.initAddForm = function() {
    reset();
    $('.add-view').show();
    $('#add-form').on('submit', function(e) {
      e.preventDefault();

    // TODO: capture the input from the user
    // and create a new instance of a task
      let task = {
        title: e.target.title.value,
        description: e.target.description.value,
        category: e.target.category.value,
        contact: e.target.contact.value,
        status: e.target.status.value,
      }
      app.Task.createTask(task);
    })
  }
  module.taskView = taskView;
})(app)
