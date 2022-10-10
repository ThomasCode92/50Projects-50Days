const formElement = document.getElementById('form');
const searchInputElement = document.getElementById('search');

const API_URL = 'https://api.github.com/users/';

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
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
