document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Kindly enter a task");
    } else {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      // Add a class to the taskItem
      taskItem.classList.add("task-item");

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";
      removeButton.onclick = function () {
        taskList.removeChild(taskItem);
      };

      // Append the remove button to the task item
      taskItem.appendChild(removeButton);

      // Append the task item to the task list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = "";
    }
  }

  // Add event listener to addButton that calls addTask when clicked
  addButton.addEventListener("click", addTask);

  // Add event listener to taskInput for 'keypress' event
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Invoke addTask function once on DOMContentLoaded
  addTask();
});
