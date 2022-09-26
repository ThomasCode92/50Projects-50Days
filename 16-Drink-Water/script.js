const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
  cup.classList.remove('full');
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(cupIndex) {
  if (
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
}
