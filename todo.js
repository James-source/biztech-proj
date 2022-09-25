import data from "./data.json" assert {type: "json"};
let task = data;

export function createTask(input) {
  const newList = {
    Tasks: input.Tasks
  };
  task.push(newList);
  return task;
}

export function deleteTask(input) {
  task = task.filter((task) => {
    return task.Tasks !== input.Tasks;
  });
  return task;
}