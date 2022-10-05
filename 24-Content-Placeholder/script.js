const headerElement = document.getElementById('header');
const titleElement = document.getElementById('title');
const excerptElement = document.getElementById('excerpt');
const profileImgElement = document.getElementById('profile_img');
const nameElement = document.getElementById('name');
const dateElement = document.getElementById('date');

const animatedBgElements = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

headerElement.innerHTML = '&nbsp;';
titleElement.innerHTML = '&nbsp;';
excerptElement.childNodes[0].replaceWith('');
profileImgElement.innerHTML = '&nbsp;';
nameElement.innerHTML = '&nbsp;';
dateElement.innerHTML = '&nbsp;';

setTimeout(getData, 2500);

function getData() {
  headerElement.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';

  titleElement.innerHTML = 'Lorem ipsum dolor sit amet';

  excerptElement.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';

  profileImgElement.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';

  nameElement.innerHTML = 'John Doe';
  dateElement.innerHTML = 'Oct 05, 2022';

  animatedBgElements.forEach(bgElement =>
    bgElement.classList.remove('animated-bg')
  );

  animatedBgTexts.forEach(bgElement =>
    bgElement.classList.remove('animated-bg-text')
  );
}
