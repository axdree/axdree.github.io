// scroll event listener
window.addEventListener("scroll", function(){
    // select header class
    var header = document.querySelector("header");
    // change class to scrolling
    header.classList.toggle("scrolling", window.scrollY > 0)
})