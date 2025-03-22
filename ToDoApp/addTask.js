import { setupDeleteButton } from './deleteTask.js';
import { setupEditButton } from './editTask.js';

export function addTask(input, todoList, updateCounts) {
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = task;
  li.appendChild(taskSpan);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  li.appendChild(checkBox);

  checkBox.addEventListener("click", () => {
    taskSpan.style.textDecoration =
      taskSpan.style.textDecoration === "line-through" ? "none" : "line-through";
    updateCounts();
  });

  const deleteBtn = setupDeleteButton(li, updateCounts);

  const editBtn = setupEditButton(li, taskSpan, checkBox, deleteBtn, updateCounts);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  input.value = "";

  updateCounts();
}