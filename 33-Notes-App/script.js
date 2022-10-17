const addBtnElement = document.getElementById('add');

addBtnElement.addEventListener('click', () => addNewNote());

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
  });

  textareaElement.addEventListener('input', function (event) {
    const { value } = event.target;
    mainElement.innerHTML = marked(value);
  });

  document.body.appendChild(note);
}
