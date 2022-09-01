const openBtnElement = document.getElementById('open');
const closeBtnElement = document.getElementById('close');
const containerElement = document.querySelector('.container');

openBtnElement.addEventListener('click', () =>
  containerElement.classList.add('show-nav')
);

closeBtnElement.addEventListener('click', () =>
  containerElement.classList.remove('show-nav')
);
