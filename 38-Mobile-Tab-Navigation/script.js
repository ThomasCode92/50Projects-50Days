const contentElements = document.querySelectorAll('.content');
const listItemElements = document.querySelectorAll('nav ul li');

listItemElements.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contentElements[idx].classList.add('show');
  });
});

function hideAllContents() {
  contentElements.forEach(content => content.classList.remove('show'));
}

function hideAllItems() {
  listItemElements.forEach(item => item.classList.remove('active'));
}
