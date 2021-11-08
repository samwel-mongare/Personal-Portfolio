const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

nav.addEventListener('click', (event) => {
  if (nav.classList.contains('show')) {
    if (event.target.tagName === 'A' || event.target.tagName === 'I') {
      nav.classList.remove('show');
    }
  }
});