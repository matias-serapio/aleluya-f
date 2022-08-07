let slideIndexTestimonios = 1;
showSlidertestimonios(slideIndexTestimonios);

function plusSlidesTestimonios(n) {

    showSlidertestimonios(slideIndexTestimonios += n);
}

function currentSlideTestimonios(n) {

    showSlidertestimonios(slideIndexTestimonios = n);
}

function showSlidertestimonios(n) {
    let i;
    // let slides = document.getElementsByClassName("mySlidesTestimonio");
    let dots = document.getElementsByClassName("demoTestimonios");
    //   let captionText = document.getElementById("caption");
    if (n > dots.length) {
        slideIndexTestimonios = 1
    }
    if (n < 1) {
        slideIndexTestimonios = dots.length
    }

    for (i = 0; i < dots.length; i++) {
        // slides[i].style.display = "none";
        dots[i].style.display = "none";

    }

    if (n > dots.length) {
        slideIndexTestimonios = 1
    } else {
        if (n < 1) {
            slideIndexTestimonios = dots.length
        }
    }

    if (slideIndexTestimonios == 1) {
        // dots[slideIndexTestimonios - 1].className += " active";
        // dots[slideIndexTestimonios].className += " active";
        // dots[slideIndexTestimonios + 1].className += " active";

        
        dots[slideIndexTestimonios -1].style.display = "block";
        dots[slideIndexTestimonios].style.display = "block";
        dots[slideIndexTestimonios + 1].style.display = "block";
    }

    if (slideIndexTestimonios == dots.length - 1) {
        // dots[slideIndexTestimonios - 1].className += " active";
        // dots[slideIndexTestimonios].className += " active";
        // dots[0].className += " active";

        dots[slideIndexTestimonios -1].style.display = "block";
        dots[slideIndexTestimonios].style.display = "block";
        dots[0].style.display = "block";
    }

    if (slideIndexTestimonios == dots.length) {
        // dots[slideIndexTestimonios - 1].className += " active";
        // dots[0].className += " active";
        // dots[1].className += " active";
        dots[slideIndexTestimonios -1].style.display = "block";
        dots[0 ].style.display = "block";
        dots[1].style.display = "block";
    } else {
        if (slideIndexTestimonios > 1 && slideIndexTestimonios < dots.length - 1) {
            // dots[slideIndexTestimonios - 1].className += " active";
            // dots[slideIndexTestimonios].className += " active";
            // dots[slideIndexTestimonios + 1].className += " active";
            dots[slideIndexTestimonios -1].style.display = "block";
            dots[slideIndexTestimonios ].style.display = "block";
            dots[slideIndexTestimonios + 1].style.display = "block";
        }
    }


    //   slides[slideIndexTestimonios-1].style.display = "block";
    //   captionText.innerHTML = dots[slideIndexTestimonios-1].alt;
}