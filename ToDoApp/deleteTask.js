function showCustomConfirm(message, onConfirm) {
  const modal = document.getElementById("confirm-modal");
  const okBtn = document.getElementById("modal-ok");
  const cancelBtn = document.getElementById("modal-cancel");
  modal.querySelector("p").textContent = message;

  modal.classList.remove("hidden");

  const cleanup = () => {
    modal.classList.add("hidden");
    okBtn.removeEventListener("click", okHandler);
    cancelBtn.removeEventListener("click", cancelHandler);
  };

  const okHandler = () => {
    onConfirm();
    cleanup();
  };

  const cancelHandler = () => {
    cleanup();
  };

  okBtn.addEventListener("click", okHandler);
  cancelBtn.addEventListener("click", cancelHandler);
}

export function setupDeleteButton(li, updateCounts) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";

  deleteBtn.addEventListener("click", () => {
    showCustomConfirm("本当に削除してもよろしいですか？", () => {
      li.remove();
      updateCounts();
    });
  });

  return deleteBtn;
}