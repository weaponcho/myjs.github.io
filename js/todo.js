const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter( toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}
 
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id =newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  // const icon = document.createElement("span");
  // icon.classList.add("material-symbols-rounded")
  // icon.innerText = delete  
  const button = document.createElement("button");
  button.innerText = "X"
  // icon.addEventListener("click", deleteToDo);
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; 
  toDoInput.value = "";
  newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if( savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos= parsedToDos;
  parsedToDos.forEach(paintToDo);
}

