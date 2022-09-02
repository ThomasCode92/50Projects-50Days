const searchElement = document.querySelector('.search');
const buttonElement = document.querySelector('.btn');
const inputElement = document.querySelector('.input');

buttonElement.addEventListener('click', () => {
  searchElement.classList.toggle('active');
  inputElement.focus();
});
