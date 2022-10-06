const navElement = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > navElement.offsetHeight + 150) {
    navElement.classList.add('active');
  } else {
    navElement.classList.remove('active');
  }
}
