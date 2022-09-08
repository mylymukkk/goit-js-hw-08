import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const form = document.querySelector('form');

const feedbackFormState = { email: '', message: '' };
const feedbackFormStateParse = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

fillFields();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', handleSubmit);

function fillFields() {
  if (!localStorage.getItem('feedback-form-state')) {
    return;
  }
  const { email, message } = feedbackFormStateParse;
  email ? (emailInput.value = email) : (emailInput.value = '');
  message ? (messageInput.value = message) : (messageInput.value = '');
}

function onInput(event) {
  feedbackFormState[event.target.name] = event.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(`Feedback form state: `, feedbackFormState);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
