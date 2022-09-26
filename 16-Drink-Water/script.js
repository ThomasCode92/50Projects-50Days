const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
  cup.classList.remove('full');
  cup.addEventListener('click', () => highlightCups(idx));
});

updateBigCup();

function highlightCups(cupIndex) {
  if (cupIndex === 7 && smallCups[cupIndex].classList.contains('full'))
    cupIndex--;
  else if (
    smallCups[cupIndex].classList.contains('full') &&
    !smallCups[cupIndex].nextElementSibling.classList.contains('full')
  ) {
    cupIndex--;
  }

  smallCups.forEach((cup, index) => {
    if (index <= cupIndex) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
