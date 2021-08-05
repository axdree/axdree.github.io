// Modified code to ensure lightbox next and prev buttons maintain the order of image from the image user clicked by checking index in NodeList
(function(){
    'user strict';

    // Creates div with id="lightboxModal"
    const lightboxModal = document.createElement('div');

    // sets div id to lightboxModal
    lightboxModal.id = "lightboxModal";

    // Adds HTML inside div
    lightboxModal.innerHTML = `
<figure>
    <img class="img-fluid">
</figure>
<a href="javascript:" class="lightboxModal-close"><i class="fas fa-times"></i></a>
<a href="javascript:" class="lightboxModal-prev"><i class="fas fa-chevron-left"></i></a>
<a href="javascript:" class="lightboxModal-next"><i class="fas fa-chevron-right"></i></a>`;
    document.body.appendChild(lightboxModal);

    // defines variables
    const lightboxModalCloseBTN = lightboxModal.querySelector(".lightboxModal-close");
    const lightboxModalFigureImage = lightboxModal.querySelector("figure > img");
    const lightboxModalNextBTN = lightboxModal.querySelector(".lightboxModal-next");
    const lightboxModalPrevBTN = lightboxModal.querySelector(".lightboxModal-prev");

    // store all images in static NodeList
    var allImages = document.querySelectorAll('a[data-toggle="lightbox"]');

    // stores image index as global variable
    var currentImageIndex = 0;


    // loop to add click event listener to all images and run function if clicked
    for(var i = 0; i < allImages.length; i++){
        allImages[i].addEventListener("click", function(e){
            // prevent page from reloading
            e.preventDefault();
            
            // add open class to lightboxModal 
            lightboxModal.classList.add("open");

            // sets lightboxModal src to href set in "a"
            lightboxModalFigureImage.src = e.currentTarget.href;

            // Ref: https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach ; using NodeList's forEach method, iterate and find which index currentTarget's href is and set currentImageIndex to value. 
            allImages.forEach(
                function(nodeValue, nodeIndex) {
                    if(e.currentTarget.href == nodeValue){
                        currentImageIndex = nodeIndex
                    }
                }
            );
        });
    }

    
    // if close button is clicked, remove open class to hide lightboxModal
    lightboxModalCloseBTN.addEventListener("click", function(e){
        // prevent page from reloading
        e.preventDefault();
        
        // remove open from class
        lightboxModal.classList.remove("open")
    })
    

    // functions to change images
    function prevImage(){
        // decrease currentImageIndex by 1 and if below 0, reset to max index
        if(--currentImageIndex < 0){
            currentImageIndex = allImages.length - 1;
        }
        // set img src to href of selected 
        lightboxModalFigureImage.src = allImages[currentImageIndex].href;
    };

    function nextImage(){
        // increment currentImageIndex by 1 and if equal to max index, reset to start
        if(++currentImageIndex == allImages.length){
            currentImageIndex = 0;
        }
        // set img src to href of selected 
        lightboxModalFigureImage.src = allImages[currentImageIndex].href;
    };

    // run cycle image function when click 
    lightboxModalPrevBTN.addEventListener('click', prevImage);
    lightboxModalNextBTN.addEventListener('click', nextImage);
})();