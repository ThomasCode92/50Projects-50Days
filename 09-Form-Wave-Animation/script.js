const labels = document.querySelectorAll('.form-control label');

function createSpanElementWithTransitionDelay(letter, idx) {
  return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
}

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(createSpanElementWithTransitionDelay)
    .join('');
});
