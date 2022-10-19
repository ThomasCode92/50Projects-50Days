const imagesElement = document.getElementById('images');
const leftBtnElement = document.getElementById('left');
const rightBtnElement = document.getElementById('right');

const imageElements = document.querySelectorAll('#images img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > imageElements.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imageElements.length - 1;
  }

  imagesElement.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtnElement.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtnElement.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
