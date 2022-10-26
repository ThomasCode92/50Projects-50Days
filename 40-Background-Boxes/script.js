const boxesContainerElement = document.getElementById('boxes');
const magicBtnElement = document.getElementById('btn');

magicBtnElement.addEventListener('click', () =>
  boxesContainerElement.classList.toggle('big')
);

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainerElement.appendChild(box);
    }
  }
}

createBoxes();
