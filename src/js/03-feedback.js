import throttle from 'lodash.throttle';
const emailInput = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');
const lsKey = 'feedback-form-state';
form.addEventListener('input', throttle(handleInput, 500));

const formInfo = {};
function handleInput(event) {
  formInfo[event.target.name] = event.target.value;
  localStorage.setItem(lsKey, JSON.stringify(formInfo));
}

const info = JSON.parse(localStorage.getItem(lsKey));

if (localStorage.length > 1) {
  emailInput.value = info.email;
  textArea.value = info.message;
}
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  if (localStorage.length < 2) {
    event.preventDefault();
    console.log('Потрібно заповнити всі поля');
  } else {
    console.log(info.email, info.message);
    event.preventDefault();

    localStorage.removeItem(lsKey);
  }
}
