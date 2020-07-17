/* dark mode toggle */

const container = document.querySelector('#container');
const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', () => {
  container.classList.toggle('dark');
  if (container.classList.contains('dark')) {
    toggler.innerHTML = "🌕";
  } else if (!container.classList.contains('dark')) {
    toggler.innerHTML = "🌑";
  }
});