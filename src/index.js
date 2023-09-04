document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const taskDescription = document.getElementById('new-task-description').value;

      const listItem = document.createElement('li');
      listItem.textContent = taskDescription;

      const taskList = document.getElementById('tasks');
      taskList.appendChild(listItem);

      document.getElementById('new-task-description').value = '';
    });
  });
});