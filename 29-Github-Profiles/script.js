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
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard('No profile with this username!');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (error) {
    createErrorCard('Problem fetching repos!');
  }
}

function createUserCard(user) {
  const cardElement = `
    <div class="card">
      <div>
        <img
          class="avatar"
          src="${user.avatar_url}"
          alt="${user.name}" />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
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

function addReposToCard(repos) {
  const reposElement = document.getElementById('repos');

  repos.slice(0, 5).forEach(repo => {
    const repoElement = document.createElement('a');

    repoElement.classList.add('repo');
    repoElement.href = repo.html_url;
    repoElement.target = '_blank';
    repoElement.innerText = repo.name;

    reposElement.appendChild(repoElement);
  });
}
