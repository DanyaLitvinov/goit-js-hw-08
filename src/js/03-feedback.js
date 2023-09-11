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

  if (form.email.value && form.message.value) {
    console.log(formData);

    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.reset();
    formData = {};
  } else {
    alert('Please fill in all fields before submitting.');
  }
}

function checkData() {
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}
