import throttle from 'lodash.throttle';
console.log(123);
const form = document.querySelector('.feedback-form');
const lsKey = 'feedback-form-state';

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', submitEvent);
window.addEventListener('load', refreshForm);
const formInfo = {};

function handleInput(event) {
  formInfo[event.target.name] = event.target.value.trim();
  localStorage.setItem(lsKey, JSON.stringify(formInfo));
}

function submitEvent(event) {
  event.preventDefault();
  localStorage.removeItem(lsKey);
  console.log(formInfo);
  event.target.reset();
}
function refreshForm() {
  try {
    const savedData = localStorage.getItem(lsKey);
    if (!savedData) return;
    formInfo = JSON.parse(savedData);
    Object.entries(formInfo).forEach(([key, val]) => {
      list.elements[key].value = val;
    });
  } catch ({ messsage }) {
    console.log(messsage);
  }
}
