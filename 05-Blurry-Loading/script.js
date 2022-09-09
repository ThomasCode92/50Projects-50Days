const background = document.querySelector('.background');
const loadText = document.querySelector('.loading-text p');

let loadValue = 0;

const interval = setInterval(blurring, 30);

function blurring() {
  loadValue++;

  if (loadValue >= 100) {
    clearInterval(interval);
  }

  loadText.textContent = `${loadValue}%`;
  background.style.filter = `blur(${scale(loadValue, 0, 100, 30, 0)}px)`;
  loadText.style.opacity = scale(loadValue, 0, 100, 1, 0);
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
