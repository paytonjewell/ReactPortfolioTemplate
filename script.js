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
  localStorage.setItem("class", container.getAttribute("class")); 
  localStorage.setItem("icon", toggler.innerHTML);
});

let btnClass = localStorage.getItem("class");
if (btnClass) {
  container.className = btnClass;
}

let icon = localStorage.getItem("icon");
if (icon) {
  toggler.innerHTML = icon;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});