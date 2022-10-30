const ratingElements = document.querySelectorAll('.rating');
const ratingsContainerElement = document.querySelector('.ratings-container');
const sendBtnElement = document.querySelector('#send');
const panelElement = document.querySelector('#panel');

let selectedRating = 'Satisfied';

ratingsContainerElement.addEventListener('click', event => {
  if (
    event.target.parentNode.classList.contains('rating') &&
    event.target.nextElementSibling
  ) {
    removeActive();
    event.target.parentNode.classList.add('active');
    selectedRating = event.target.nextElementSibling.innerHTML;
  } else if (
    event.target.parentNode.classList.contains('rating') &&
    event.target.previousSibling &&
    event.target.previousElementSibling.nodeName === 'IMG'
  ) {
    removeActive();
    event.target.parentNode.classList.add('active');
    selectedRating = event.target.innerHTML;
  }
});

sendBtnElement.addEventListener('click', event => {
  panelElement.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratingElements.length; i++) {
    ratingElements[i].classList.remove('active');
  }
}
