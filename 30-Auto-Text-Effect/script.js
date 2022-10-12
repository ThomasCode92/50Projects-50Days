const textElement = document.getElementById('text');
const speedInputElement = document.getElementById('speed');

const displayText = 'We Love Programming!';

let idx = 1;
let speed = 300 / speedInputElement.value;

writeText();

function writeText() {
  textElement.innerText = displayText.slice(0, idx);

  idx++;

  if (idx > displayText.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedInputElement.addEventListener('input', event => {
  speed = 300 / event.target.value;
});
