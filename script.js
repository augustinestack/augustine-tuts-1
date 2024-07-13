const navMenu  = document.getElementById("nav-menu");
const navLinks = document.querySelector(".nav-links");

navMenu.addEventListener('click', function (){
    navLinks.classList.toggle("show");
})