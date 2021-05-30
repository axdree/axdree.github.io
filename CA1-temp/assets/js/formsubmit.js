// when the page is loaded
window.onload = function() {
    // search for the first form in html document
     document.forms[0].onsubmit = function() {
      // check if form values are valid
        if (this.checkValidity()) {
          // if they are, submit the form and block the page reload
           alert("Form Submitted");
           return false;
        }
    }
}