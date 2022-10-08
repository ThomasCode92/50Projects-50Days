const btnElement = document.getElementById('button');
const toastsElement = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

btnElement.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.classList.add(type ? type : getRandomType());

  notification.innerText = message ? message : getRandomMessage();

  toastsElement.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
