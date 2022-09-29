const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const needleSecond = document.querySelector('.needle.second');
const needleMinute = document.querySelector('.needle.minute');
const needleHour = document.querySelector('.needle.hour');
const toggle = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggle.addEventListener('click', e => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const needleTransition = 'all 0.5s ease-in';

  needleHour.style.transition = `${hours === 0 ? 'none' : needleTransition}`;
  needleMinute.style.transition = `${minutes === 0 ? 'none' : needleTransition}`;
  needleSecond.style.transition = `${seconds === 0 ? 'none' : needleTransition}`;

  const hourAngle = scale(hoursForClock, 0, 12, 0, 360);
  const minuteAngle = scale(minutes, 0, 60, 0, 360);
  const secondAngle = scale(seconds, 0, 60, 0, 360);

  hourElement.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
  secondElement.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;

  timeElement.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
