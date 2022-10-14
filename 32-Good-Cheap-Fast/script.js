const toggleInputElements = document.querySelectorAll('.toggle');
const goodInputElement = document.querySelector('#good');
const cheapInputElement = document.querySelector('#cheap');
const fastInputElement = document.querySelector('#fast');

toggleInputElements.forEach(toggleInputElement =>
  toggleInputElement.addEventListener('change', event =>
    checkInputs(event.target)
  )
);

function checkInputs(clickedInputElement) {
  if (
    goodInputElement.checked &&
    cheapInputElement.checked &&
    fastInputElement.checked
  ) {
    if (goodInputElement === clickedInputElement) {
      fastInputElement.checked = false;
    }

    if (cheapInputElement === clickedInputElement) {
      goodInputElement.checked = false;
    }

    if (fastInputElement === clickedInputElement) {
      cheapInputElement.checked = false;
    }
  }
}
