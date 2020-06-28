const key = document.querySelector('kbd')
const keycode = document.querySelector('h2')
const key2 = document.querySelector('.key2')

document.addEventListener('keydown', e => {
  if (e.keyCode === 32) {
    key.textContent = 'Space';
  } else {
    key.textContent = e.key;
  }
  keycode.textContent = e.keyCode
})