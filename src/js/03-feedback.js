import throttle from 'lodash.throttle';

const list = document.querySelector('.feedback-form');
const KeyIn = 'feedback-form-state';
list.addEventListener('input', throttle(inputInfo, 500));
list.addEventListener('submit', submitEvent);
window.addEventListener('load', refreshForm);

let formInfo = {};

function inputInfo(event) {
  formInfo[event.target.name] = event.target.value.trim();
  localStorage.setItem(KeyIn, JSON.stringify(formInfo));
}

function submitEvent(event) {
  event.preventDefault();
  localStorage.removeItem(KeyIn);
  console.log(formInfo);
  formInfo = {};
  event.target.reset();
}

function refreshForm() {
  try {
    const savedData = localStorage.getItem(KeyIn);
    if (!savedData) return;
    formInfo = JSON.parse(savedData);
    Object.entries(formInfo).forEach(([key, val]) => {
      list.elements[key].value = val;
    });
  } catch ({ messsage }) {
    console.log(messsage);
  }
}
