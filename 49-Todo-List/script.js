const formElement = document.getElementById('form');
const inputElement = document.getElementById('input');
const todosListElement = document.getElementById('todos');

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
    });

    todoElement.addEventListener('contextmenu', event => {
      event.preventDefault();
      todoElement.remove();
    });

    todosListElement.appendChild(todoElement);

    inputElement.value = '';
  }
}
