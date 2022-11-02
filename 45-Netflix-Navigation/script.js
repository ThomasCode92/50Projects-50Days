const openBtnElement = document.querySelector('.open-btn');
const closeBtnElement = document.querySelector('.close-btn');
const navElement = document.querySelectorAll('.nav');

openBtnElement.addEventListener('click', () => {
  navElement.forEach(navElement => navElement.classList.add('visible'));
});

closeBtnElement.addEventListener('click', () => {
  navElement.forEach(navElement => navElement.classList.remove('visible'));
});
