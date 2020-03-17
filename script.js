$(document).ready(function() {
  $("#techfolder").click(function(){
    $("#txt").toggleClass("d-none");
  });
  $("#persfolder").click(function(){
    $("#txt2").toggleClass("d-none");
  });
  $("#linkfolder").click(function(){
    $("#txt3").toggleClass("d-none");
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.onscroll = function() {
  var navbar = document.getElementById('navigation');
  if ( window.pageYOffset > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
}
