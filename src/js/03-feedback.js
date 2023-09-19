import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const textArea = form.elements.message;
const lsKey = 'feedback-form-state';
form.addEventListener('input', throttle(handleInput, 500));
const formInfo = {};
function handleInput(event) {
  formInfo[event.target.name] = event.target.value;
  localStorage.setItem(lsKey, JSON.stringify(formInfo));
}
emailInput.value = localStorage.getItem(lsKey.email) ?? '';
textArea.value = localStorage.getItem(lsKey.message) ?? '';
const info = JSON.parse(localStorage.getItem(lsKey));
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  if (info.email || info.message) {
    event.preventDefault();
    console.log(info);
    localStorage.removeItem(lsKey);
  }
}
