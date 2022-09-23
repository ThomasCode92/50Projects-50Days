const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = function() {
    const targetData = counter.getAttribute('data-target');
    const targetValue = parseInt(targetData)
    const counterValue = parseInt(counter.innerText);

    const increment = targetValue / 200;

    if (counterValue < targetValue) {
      counter.innerText = `${Math.ceil(counterValue + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = targetValue;
    }
  };

  updateCounter();
});
