const formElement = document.getElementById('form');
const inputElement = document.getElementById('input');
const todosListElement = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(todo => addTodo(todo));
}

formElement.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = inputElement.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoElement = document.createElement('li');
    if (todo && todo.completed) {
      todoElement.classList.add('completed');
    }

    todoElement.innerText = todoText;

    todoElement.addEventListener('click', () => {
      todoElement.classList.toggle('completed');
      updateLocalStorage();
    });

    todoElement.addEventListener('contextmenu', event => {
      event.preventDefault();
      todoElement.remove();
      updateLocalStorage();
    });

    todosListElement.appendChild(todoElement);

    inputElement.value = '';

    updateLocalStorage();
  }
}

function updateLocalStorage() {
  const todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach(todoElement => {
    todos.push({
      text: todoElement.innerText,
      completed: todoElement.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}
