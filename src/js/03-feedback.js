// Get the text field that we're going to track
import throttle from 'lodash.throttle';
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {};

checkData();
form.addEventListener('input', throttle(onForm, 500));
form.addEventListener('submit', onSubmit);

function onForm(e) {
  formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log(formData);
}

function checkData() {
  if (localStorage.length > 0) {
    formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    form.email.value = formData.email;
    form.message.value = formData.message;
  } return ""

}
