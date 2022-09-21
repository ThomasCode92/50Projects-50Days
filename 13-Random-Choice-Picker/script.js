const textarea = document.getElementById('textarea');
const tagsElement = document.getElementById('tags');

textarea.focus();

textarea,
  addEventListener('keyup', event => {
    createTags(event.target.value);
  });

function createTags(input) {
  const tags = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  console.log(tags);

  tagsElement.innerHTML = '';

  tags.forEach(tag => {
    const tagElement = createTagElement(tag);
    tagsElement.appendChild(tagElement);
  });
}

function createTagElement(text) {
  const tagElement = document.createElement('span');

  tagElement.classList.add('tag');
  tagElement.innerText = text;

  return tagElement;
}
