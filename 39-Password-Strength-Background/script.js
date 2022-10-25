const passwordInputElement = document.getElementById('password');
const backgroundElement = document.getElementById('background');

passwordInputElement.addEventListener('input', event => {
  const input = event.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  
  backgroundElement.style.filter = `blur(${blurValue}px)`;
});
