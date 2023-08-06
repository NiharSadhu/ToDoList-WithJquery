$(document).ready(function () {
    // Function to add new todo item to the list
    function addTodo() {
      const todoText = $('#list').val().trim();
  
      if (todoText !== '') {
        const listItem = $('<li></li>').text(todoText);
        $('.list').append(listItem);
        $('#list').val('');
      }
    }
  
    // Function to handle todo submission
    function submitTodo() {
      $('.btn').on('click', function (event) {
        event.preventDefault();
        addTodo();
      });
  
      $('#list').on('keydown', function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          addTodo();
        }
      });
    }
  
    submitTodo();
  });
  