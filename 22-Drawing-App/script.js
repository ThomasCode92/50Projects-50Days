const canvas = document.getElementById('canvas');

let x;
let y;
let size = 20;
let color = 'black';

const context = canvas.getContext('2d');

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
  context.lineWidth = size;
  context.stroke();
}

drawCircle(100, 200);
drawLine(300, 300, 300, 500);
