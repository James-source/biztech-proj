import data from "./data.json";
let task = data;

export function createTask(input) {
  const newList = {
    Tasks: input.Tasks
  };
  task.push(newList);
  return task;
}