const form = document.querySelector('.feedback-form');
form.addEventListener('input', handleInput);
const lsText = 'feedback-form-state';
function handleInput(event) {
  localStorage.setItem(lsText, JSON.stringify(event.target.value));
  console.log(event.target.value);
}
