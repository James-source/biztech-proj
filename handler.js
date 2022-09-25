import {
  createTask,
  deleteTask
} from "./todo.js";

const createTaskForm = document.getElementById("createTaskForm");
const showResult = document.getElementById("result");
const deleteTaskForm = document.getElementById("deleteTaskForm");

createTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const result = createTask(formProps);
  showResult.innerHTML = JSON.stringify(result, null, 2);
});

deleteTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const result = deleteTask(formProps);
  showResult.innerHTML = JSON.stringify(result, null, 2);
});