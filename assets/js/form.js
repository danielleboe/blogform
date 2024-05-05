const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#blogtitle');
const contentInput = document.querySelector('#content');
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

const title = titleInput.value;
const content = contentInput.value;

  if (username.trim() === '' || !username) {
    console.log('username+++++',username);
    displayMessage('error', 'Username cannot be blank');
  } else if (title.trim() === ''  || !title) {
    displayMessage('error', 'Title cannot be blank');
} else if (content.trim() === '' || !content) {
    displayMessage('error', 'Content cannot be blank');
  } else {
    displayMessage('success', 'Submitted successfully');
  }



} ); 



// renderLastRegistered();

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute('class', type);
// }

// function renderLastRegistered() {
//   const username = localStorage.getItem('username');
//   const blogtitle = localStorage.getItem('blogtitle');


//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener('click', function (event) {
//   event.preventDefault();

//   const email = emailInput.value;
//   const password = passwordInput.value;

//   if (email === '') {
//     displayMessage('error', 'Email cannot be blank');
//   } else if (password === '') {
//     displayMessage('error', 'Password cannot be blank');
//   } else {
//     displayMessage('success', 'Registered successfully');

//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);
//     renderLastRegistered();
//   }
// });

// declare variables
// capture form data (onSubmit listener) blog title, content, username
// handle validation
// store data to local storage as an array of objects
// 