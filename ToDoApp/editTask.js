
export function setupEditButton(li, taskSpan, checkBox, deleteBtn, updateCounts) {
  const editBtn = document.createElement("button");
  editBtn.textContent = "編集";

  editBtn.addEventListener("click", () => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.value = taskSpan.textContent;

    const submit = document.createElement("button");
    submit.textContent = "更新";

    form.appendChild(input);
    form.appendChild(submit);

    li.innerHTML = ""; // 一旦クリアして編集モードへ
    li.appendChild(form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      taskSpan.textContent = input.value;

      // 編集完了後、再構成
      li.innerHTML = "";
      li.appendChild(taskSpan);
      li.appendChild(checkBox);

      // 編集ボタンを再セット（再生成）
      const newEditBtn = setupEditButton(li, taskSpan, checkBox, deleteBtn, updateCounts);
      li.appendChild(newEditBtn);

      li.appendChild(deleteBtn);
      updateCounts();
    });
  });

  return editBtn;
}