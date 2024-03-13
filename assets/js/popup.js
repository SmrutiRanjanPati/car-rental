const popupBtns = document.querySelectorAll('.popupBtn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');

popupBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target == popup) {
    popup.style.display = 'none';
  }
});


