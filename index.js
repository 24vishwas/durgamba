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


// services
const carousel = document.querySelector('.services-container .carousel');
const items = document.querySelectorAll('.services-container .service-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const paginationItems = document.querySelectorAll('.services-container .pagination-item');

let currentIndex = 0;
let itemsPerPage = getItemsPerPage();

// Clone first and last items for infinite effect
const firstClone = carousel.firstElementChild.cloneNode(true);
const lastClone = carousel.lastElementChild.cloneNode(true);
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, carousel.firstElementChild);

function updateCarousel() {
  const totalItems = items.length;
  console.log('totalItems', totalItems)
  const offset = (currentIndex + 1) * 100 / itemsPerPage; // Adjust for cloned items
  carousel.style.transform = `translateX(-${offset}%)`;
  paginationItems.forEach((item, index) => {
    console.log('index', index)
    console.log('currentIndex', currentIndex)
    if(itemsPerPage == 1){
      if (index == (currentIndex )) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      } 
    }else{

      if (index == (currentIndex + 1)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  });
}

function goToIndex(index) {
  currentIndex = index;
  console.log('currentIndex', currentIndex)
  updateCarousel();
}

function goToNext() {
  if (currentIndex >= items.length - 1) {
    currentIndex = 0;
    carousel.style.transition = 'none';
    updateCarousel();
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease';
      goToNext();
    }, 20);
  } else {
    currentIndex++;
    updateCarousel();
  }
}

function goToPrev() {
  if (currentIndex <= 0) {
    currentIndex = items.length - 1;
    carousel.style.transition = 'none';
    updateCarousel();
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease';
      goToPrev();
    }, 20);
  } else {
    currentIndex--;
    updateCarousel();
  }
}

function getItemsPerPage() {
  if (window.innerWidth >= 1200) {
    return 3;
  } else if (window.innerWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);
window.addEventListener('resize', () => {
  itemsPerPage = getItemsPerPage();
  updateCarousel();
});

paginationItems.forEach((item) => {
  item.addEventListener('click', () => {
    const index = parseInt(item.getAttribute('data-index'));
    const centerIndex = index - Math.floor(itemsPerPage / 2);
    


    
    goToIndex((centerIndex + items.length) % items.length);
  });
});

// Initial setup
updateCarousel();