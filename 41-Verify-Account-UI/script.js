const codeElements = document.querySelectorAll('.code');

codeElements[0].focus();

codeElements.forEach((codeElement, idx) => {
  codeElement.addEventListener('keydown', event => {
    if (event.key >= 0 && event.key <= 9) {
      if (idx + 1 > 5) return;
      codeElements[idx].value = '';
      setTimeout(() => codeElements[idx + 1].focus(), 10);
    } else if (event.key === 'Backspace') {
      if (idx - 1 < 0) return;
      setTimeout(() => codeElements[idx - 1].focus(), 10);
    }
  });
});
