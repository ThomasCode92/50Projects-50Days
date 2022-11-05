const containerElement = document.querySelector('.container');

const UNSPLASH_URL = 'https://source.unsplash.com/random/';
const numRows = 5;

for (let i = 0; i < numRows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${UNSPLASH_URL}${getRandomSize()}`;
  containerElement.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
