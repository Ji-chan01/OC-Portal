const passwordInput = document.getElementById('password');
const openEyes = document.querySelector('.monkey-open-eyes');
const closeEyes = document.querySelector('.monkey-close-eyes');
const wowed = document.querySelector('.monkey-wowed');
const showPassword = document.getElementById('show-pass');
const hidePassword = document.getElementById('hide-pass');

passwordInput.addEventListener('focus', () => {
  if (passwordInput.type === 'password') {
    showMonkey(closeEyes);
  }
});

passwordInput.addEventListener('blur', () => {
  if (passwordInput.type === 'password') {
    showMonkey(openEyes);
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length > 0) {
    showPassword.classList.remove('active');
    hidePassword.classList.add('active');
  } else {
    showPassword.classList.remove('active');
    hidePassword.classList.remove('active');
  }
});

showPassword.addEventListener('click', () => {
  passwordInput.type = 'text';
  showPassword.classList.remove('active');
  hidePassword.classList.add('active');
  showMonkey(wowed);
});

hidePassword.addEventListener('click', () => {
  passwordInput.type = 'password';
  showPassword.classList.add('active');
  hidePassword.classList.remove('active');

  if (document.activeElement === passwordInput) {
    showMonkey(closeEyes);
  } else {
    showMonkey(openEyes);
  }
});

function showMonkey(monkeyToShow) {
  openEyes.classList.remove('active');
  closeEyes.classList.remove('active');
  wowed.classList.remove('active');
  monkeyToShow.classList.add('active');
}
