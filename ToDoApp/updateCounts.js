export function updateCounts(todoList, all, done, yet) {
  const items = todoList.querySelectorAll("li");
  const total = items.length;
  let completed = 0;

  items.forEach(li => {
    const checkbox = li.querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) {
      completed++;
    }
  });

  const notCompleted = total - completed;

  all.textContent = `全てのTodo: ${total}`;
  done.textContent = `完了済みのTodo: ${completed}`;
  yet.textContent = `未完了のTodo: ${notCompleted}`;
}