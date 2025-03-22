import { addTask } from './addTask.js';
import { updateCounts } from './updateCounts.js';

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const done = document.getElementById("done");
const undone = document.getElementById("yet");
const all = document.getElementById("all");

const update = () => updateCounts(todoList, all, done, undone);

addBtn.addEventListener("click", () => {
  addTask(input, todoList, update);
});