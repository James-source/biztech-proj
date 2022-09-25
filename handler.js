import {
    createTask
  } from "./data.js";

  const createTaskForm = document.getElementById("createTaskForm");
  const showResult = document.getElementById("result");

  createTaskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const result = createTask(formProps);
    showResult.innerHTML = JSON.stringify(result, null, 2);
  });