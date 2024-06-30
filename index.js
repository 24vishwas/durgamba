function toggleFunction() {
   
    var x = document.getElementById("topnav");
    x.classList.toggle("expanded");
}

function checkOrientation() {
    var x = document.getElementById("topnav");
    if (window.matchMedia("(orientation: landscape)").matches) { // Change the class name to "landscape" when in landscape orientation

        if (x.className === "nav-container responsive") {
            x.className = "nav-container"
        }


    } else {}
}

// testimonial
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlides(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

const offset = slideIndex * 100   ;
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${offset}%)`;
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function nextSlide() {
  showSlides(slideIndex + 1);
}

function prevSlide() {
  showSlides(slideIndex - 1);
}

function currentSlide(n) {
  showSlides(n - 1);
}

// Initial display
showSlides(slideIndex);