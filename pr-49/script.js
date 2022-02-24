const input = document.getElementById("input");
const todosEl = document.getElementById("todos");

let todosList = [];

todosList =
  localStorage.getItem("todos") === null
    ? []
    : JSON.parse(localStorage.getItem("todos"));

renderTodos(todosList);

const todos = document.querySelectorAll(".todo");

todos.forEach((todo) => {
  todo.addEventListener("click", () => {
    todo.classList.toggle("done");

    todosList = todosList.map((todoM) => {
      if (todoM.id === +todo.id) {
        if (todoM.done === true) {
          todoM.done = false;
        } else if (todoM.done === false) {
          todoM.done = true;
        }
      }

      return todoM;
    });
    localStorage.setItem("todos", JSON.stringify(todosList));
  });

  todo.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todosList = todosList.filter((todo) => todo.id !== +e.target.id);
    localStorage.setItem("todos", JSON.stringify(todosList));
    e.target.remove();
  });
});

input.addEventListener("change", (e) => {
  e.preventDefault();
  const value = e.target.value;
  const todoOb = {
    id: Date.now() + Math.floor(Math.random() + 10000),
    value,
    done: false,
  };
  todosList = [...todosList, todoOb];
  localStorage.setItem("todos", JSON.stringify(todosList));
  e.target.value = "";
});

function renderTodos(tl) {
  todosEl.innerHTML = "";
  for (let i = 0; i < tl.length; i++) {
    const todo = tl[i];
    const todoEl = document.createElement("div");
    todoEl.classList.add("todo");
    todoEl.innerText = todo.value;
    todoEl.id = todo.id;
    if (todo.done) {
      todoEl.classList.add("done");
    }
    todosEl.appendChild(todoEl);
  }
  localStorage.setItem("todos", JSON.stringify(tl));
}
