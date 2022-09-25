import data from "./data.json" assert {type: "json"};
let task = data;

export function createTask(input) {
  const newList = {
    Task: input.Task
  };
  task.push(newList);
  return task;
}

export function deleteTask(input) {
  task = task.filter((task) => {
    return task.Task !== input.Task;
  });
  return task;
}