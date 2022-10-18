const numberElements = document.querySelectorAll('.nums span');
const counterElement = document.querySelector('.counter');
const finalMessageElement = document.querySelector('.final');
const replayBtnElement = document.querySelector('#replay');

runAnimation();

function resetDOM() {
  counterElement.classList.remove('hide');
  finalMessageElement.classList.remove('show');

  numberElements.forEach(numberElement => {
    numberElement.classList.value = '';
  });

  numberElements[0].classList.add('in');
}

function runAnimation() {
  numberElements.forEach((numberElement, idx) => {
    const nextToLast = numberElements.length - 1;

    numberElement.addEventListener('animationend', event => {
      if (event.animationName === 'goIn' && idx !== nextToLast) {
        numberElement.classList.remove('in');
        numberElement.classList.add('out');
      } else if (
        event.animationName === 'goOut' &&
        numberElement.nextElementSibling
      ) {
        numberElement.nextElementSibling.classList.add('in');
      } else {
        counterElement.classList.add('hide');
        finalMessageElement.classList.add('show');
      }
    });
  });
}

replayBtnElement.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});
