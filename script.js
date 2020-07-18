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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});