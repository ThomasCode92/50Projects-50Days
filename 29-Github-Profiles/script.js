const formElement = document.getElementById('form');
const searchInputElement = document.getElementById('search');
const mainElement = document.getElementById('main');

const API_URL = 'https://api.github.com/users/';

mainElement.innerHTML = '';

formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = searchInputElement.value;

  if (!username) return;

  getUser(username);
  searchInputElement.value = '';
});

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard('No profile with this username!');
    }
  }
}

function createUserCard(data) {
  const cardElement = `
    <div class="card">
      <div>
        <img
          class="avatar"
          src="${data.avatar_url}"
          alt="${data.name}" />
      </div>
      <div class="user-info">
        <h2>${data.name}</h2>
        <p>${data.bio}</p>
        <ul>
          <li>${data.followers} <strong>Followers</strong></li>
          <li>${data.following} <strong>Following</strong></li>
          <li>${data.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;

  mainElement.innerHTML = cardElement;
}

function createErrorCard(message) {
  const cardElement = `
    <div class="card">
        <h1>${message}</h1>
    </div>
  `;

  main.innerHTML = cardElement;
}
