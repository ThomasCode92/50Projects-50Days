const addBtnElement = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

addBtnElement.addEventListener('click', () => addNewNote());

if (notes) {
  notes.forEach(note => addNewNote(note));
}

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}""></textarea>
  `;

  const editBtnElement = note.querySelector('.edit');
  const deleteBtnElement = note.querySelector('.delete');
  const mainElement = note.querySelector('.main');
  const textareaElement = note.querySelector('textarea');

  textareaElement.value = text;
  mainElement.innerHTML = marked(text);

  editBtnElement.addEventListener('click', function () {
    mainElement.classList.toggle('hidden');
    textareaElement.classList.toggle('hidden');
  });

  deleteBtnElement.addEventListener('click', function () {
    note.remove();
    updateLocalStorage();
  });

  textareaElement.addEventListener('input', function (event) {
    const { value } = event.target;
    mainElement.innerHTML = marked(value);
    updateLocalStorage();
  });

  document.body.appendChild(note);
}

function updateLocalStorage() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];

  notesText.forEach(note => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}
