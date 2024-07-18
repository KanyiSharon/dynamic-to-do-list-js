document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Check Local Storage for existing tasks
  const storedTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Kindly enter a task");
    } else {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskItem.classList.add("task-item");

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";
      removeButton.onclick = function () {
        taskList.removeChild(taskItem);
        updateLocalStorage();
      };

      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);

      taskInput.value = "";
      updateLocalStorage();
    }
  }

  // Event listener for 'Add Task' button click
  addButton.addEventListener("click", addTask);

  // Event listener for 'Enter' key press in task input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Function to update Local Storage with current tasks
  function updateLocalStorage() {
    const tasks = Array.from(taskList.querySelectorAll("li.task-item")).map(
      (task) => task.textContent
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to load tasks from Local Storage
  function loadTasks() {
    storedTasks.forEach((taskText) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskItem.classList.add("task-item");

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";
      removeButton.onclick = function () {
        taskList.removeChild(taskItem);
        updateLocalStorage();
      };

      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
    });
  }

  // Load tasks from Local Storage when the page loads
  loadTasks();
});
