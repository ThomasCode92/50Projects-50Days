const canvas = document.getElementById('canvas');

let x;
let y;
let isPressed = false;
let size = 20;
let color = 'black';

const context = canvas.getContext('2d');

canvas.addEventListener('mousedown', event => {
  isPressed = true;

  x = event.offsetX;
  y = event.offsetY;
});

document.addEventListener('mouseup', event => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', event => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = size * 2;
  context.stroke();
}

drawCircle(100, 200);
drawLine(300, 300, 300, 500);
