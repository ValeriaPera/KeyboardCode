const key = document.querySelector('kbd')
const keycode = document.querySelector('#keycode')

document.addEventListener('keydown', e => {
  if (e.keyCode === 32) {
    key.textContent = 'Space';
  } else {
    key.textContent = e.key;
  }
  keycode.textContent = e.keyCode
  key.classList.add("noBorders");
})
document.addEventListener("keyup", e => {
  key.classList.remove("noBorders");
})



