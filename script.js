window.onscroll = function() {
    var navbar = document.getElementById('navigation');
    if ( window.pageYOffset > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}
