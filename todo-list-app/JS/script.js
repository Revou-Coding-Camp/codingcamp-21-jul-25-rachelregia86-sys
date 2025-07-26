document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const dateInput = document.getElementById("todo-date");
  const list = document.getElementById("todo-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value.trim();
    const date = dateInput.value;

    if (task === "" || date === "") {
      alert("Tugas dan tanggal harus diisi!");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${task} - <small>${date}</small>
      <button onclick="this.parentElement.remove()">Hapus</button>`;

    list.appendChild(li);

    input.value = "";
    dateInput.value = "";
  });
});
