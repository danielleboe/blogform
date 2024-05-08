const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#blogtitle');
const contentInput = document.querySelector('#blogcontent');
const submit = document.querySelector('#submit');
const msgDiv = document.querySelector('#msg');

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

submit.addEventListener('click', function (event) {
  event.preventDefault();

const username = usernameInput.value;
console.log('form submitted+++++++++++', username.value);

const blogtitle = titleInput.value;
const blogcontent = contentInput.value;


  if (username.trim() === '' || !username) {
    console.log('username+++++',username);
    displayMessage('error', 'Username cannot be blank');
  } else if (blogtitle.trim() === ''  || !blogtitle) {
    displayMessage('error', 'Title cannot be blank');
} else if (blogcontent.trim() === '' || !blogcontent) {
    displayMessage('error', 'Content cannot be blank');
  } else {
    displayMessage('success', 'Submitted successfully');
  }

  localStorage.setItem('usernameInput',username);
  localStorage.setItem('titleInput',blogtitle);
  localStorage.setItem('contentInput',blogcontent);
} ); 