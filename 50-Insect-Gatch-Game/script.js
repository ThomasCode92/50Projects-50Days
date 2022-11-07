const screenElements = document.querySelectorAll('.screen');
const chooseInsectBtnElements = document.querySelectorAll('.choose-insect-btn');
const startBtnElement = document.getElementById('start-btn');
const gameContainerElement = document.getElementById('game-container');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');

let totalSeconds = 0;
let score = 0;
let selectedInsect = {};

startBtnElement.addEventListener('click', () => screenElements[0].classList.add('up'));

chooseInsectBtnElements.forEach(btnElement => {
  btnElement.addEventListener('click', () => {
    const img = btnElement.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    selectedInsect = { src, alt };
    screenElements[1].classList.add('up');

    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  console.log(minutes, seconds);

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  timeElement.innerHTML = `Time: ${minutes}:${seconds}`;

  totalSeconds++;
}

function createInsect() {
  const insectElement = document.createElement('div');
  const { x, y } = getRandomLocation();

  insectElement.classList.add('insect');
  insectElement.style.top = `${y}px`;
  insectElement.style.left = `${x}px`;
  insectElement.innerHTML = `
    <img src="${selectedInsect.src}" alt="${selectedInsect.alt}"
      style="transform: rotate(${Math.random() * 360}deg)" />`;

  insectElement.addEventListener('click', catchInsect);

  gameContainerElement.appendChild(insectElement);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
}

function catchInsect() {
  this.classList.add('caught');
  setTimeout(() => this.remove(), 2000);

  increaseScore();
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;
  if (score > 19) {
    messageElement.classList.add('visible');
  }
  scoreElement.innerHTML = `Score: ${score}`;
}
