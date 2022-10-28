const resultsListElement = document.getElementById('result');
const filterInputElement = document.getElementById('filter');

const listItems = [];

async function getData() {
  const response = await fetch('https://randomuser.me/api?results=50');
  const responseData = await response.json();

  const users = responseData.results;

  // Clear result
  resultsListElement.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');

    listItems.push(li);

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

    resultsListElement.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

filterInputElement.addEventListener('input', event => {
  const searchTerm = event.target.value;
  filterData(searchTerm);
});

getData();
