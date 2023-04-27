let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo() {
  let todoInput = document.getElementById("todo").value.trim();

  let newTodo = {
    id: todos.length + 1,
    todo: todoInput,
  };

  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));

  document.getElementById("todoForm").reset();
  document.getElementById("todo").value = "";

  updateTodoList();
}

function updateTodoList() {
  let todoList = document.getElementById("todoList");

  todoList.innerHTML = "";

  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "todo[]";
    checkbox.style.marginRight = "10px";

    if (todo.completed) {
      checkbox.checked = true;
      li.style.textDecoration = "line-through";
    }

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        li.style.textDecoration = "line-through";
        todo.completed = true;
      } else {
        li.style.textDecoration = "none";
        todo.completed = false;
      }

      localStorage.setItem("todos", JSON.stringify(todos));
    });

    li.appendChild(checkbox);

    let textNode = document.createTextNode(todo.todo);
    li.appendChild(textNode);

    let button = document.createElement("button");
    button.classList.add("btn", "btn-danger", "float-right");
    button.innerText = "Delete";

    button.addEventListener("click", () => {
      todos = todos.filter((item) => item.id !== todo.id);

      localStorage.setItem("todos", JSON.stringify(todos));

      updateTodoList();
    });

    li.appendChild(button);

    todoList.appendChild(li);
  });
}

updateTodoList();

document.getElementById("todoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

const links = document.querySelectorAll("a[data-href]");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.setAttribute("href", link.getAttribute("data-href"));
  });

  link.addEventListener("mouseout", () => {
    link.removeAttribute("href");
  });
});

// footer subscribe
const subscribe = document.getElementById("btnSubs");

subscribe.addEventListener("click", () => {
  const subsEmail = document.getElementById("emailSubs").value;

  if (subsEmail.trim() === "") {
    alert("Please fill in all fields");
  } else {
    alert("Thanks For Subscribe!");
    document.getElementById("emailSubs").value = "";
  }
});
