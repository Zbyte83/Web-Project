const input = document.getElementById("inputText");
const list = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");
const btnDelete = document.getElementById("btnDelete");

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") {
        alert("Información incorrecta");
        return;
    }

    // Crear li
    const li = document.createElement("li");
        li.classList.add("text__item");

    // Crear checkbox
    const check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("list__check");

    // Para que cada checkbox tenga un id único
    const todoId = "todo-" + Date.now(); // evita duplicados
        check.id = todoId;

    // Label checkbox
    const labelCheck = document.createElement("label");
        labelCheck.classList.add("item__check");
        labelCheck.setAttribute("for", todoId);

    // Label texto
    const textLabel = document.createElement("label");
        textLabel.classList.add("list__text");
        textLabel.setAttribute("for", todoId);
        textLabel.textContent = text;

    // Botón delete
    const deleteBtn = document.createElement("btnDelete");
        deleteBtn.classList.add("btn__delete");
        deleteBtn.id = "btnDelete";
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        deleteBtn.addEventListener("click", () => li.remove());

    // Añadir hijos
    li.appendChild(check);
    li.appendChild(labelCheck);
    li.appendChild(textLabel);
    li.appendChild(deleteBtn);

    // Añadir a la lista
    list.appendChild(li);

    // Limpiar input
    input.value = "";
});
