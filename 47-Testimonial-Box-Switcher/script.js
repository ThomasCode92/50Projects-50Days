import testimonials from './testimonials.json' assert { type: 'json' };

const testimonialElement = document.querySelector('.testimonial');
const userImageElement = document.querySelector('.user-image');
const usernameElement = document.querySelector('.username');
const roleElement = document.querySelector('.role');

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonialElement.innerHTML = text;
  userImageElement.src = photo;
  usernameElement.innerHTML = name;
  roleElement.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
