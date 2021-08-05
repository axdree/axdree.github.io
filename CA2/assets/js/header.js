// Vanilla JS
// scroll event listener
window.addEventListener("scroll", function(){
    // defining elements
    var nav = document.querySelector("nav");
    var header = document.querySelector("header");

    // changing classes 
    header.classList.toggle("scrolling", window.scrollY > 0);

    // conditional statements to toggle background on mobile
    if(!(nav.classList.contains('toggled'))){
        nav.classList.toggle("bg-dark", window.scrollY > 0);
        nav.classList.toggle('navbar-dark',  window.scrollY > 0);
    };

    if ((nav.classList.contains('toggled')) && (header.classList.contains('scrolling'))){
        nav.classList.add("bg-dark", window.scrollY > 0);
        nav.classList.add('navbar-dark',  window.scrollY > 0);
    };
})

// button click event listener
document.getElementById('navbarbutton').addEventListener("click", function(){
    // defining elements
    var nav = document.querySelector("nav");
    var header = document.querySelector("header");
    var navbarnav = document.getElementById('navbarNav');

    // conditional statements to toggle background on mobile
    if(!(navbarNav.classList.contains('navbar-dark')) && !(header.classList.contains('scrolling'))){
        nav.classList.toggle("bg-dark");
        nav.classList.toggle('navbar-dark');
        nav.classList.toggle("toggled");
    };
    
    if((header.classList.contains('scrolling'))){
        nav.classList.toggle("toggled");
    };
});