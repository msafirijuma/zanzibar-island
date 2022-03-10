
// FUNDU SLIDESHOW IMAGES

var funduSlideIndex = 1;
previewFunduSlides(funduSlideIndex);

// Thumbnail image controls
function funduCurrentSlide(n) {
  previewFunduSlides(funduSlideIndex = n);
}

function previewFunduSlides(n) {
  var i;
  var slides = document.getElementsByClassName("fundu-slides");
  var dots = document.getElementsByClassName("fundu-dot");
  if (n > slides.length) {funduSlideIndex = 1}
  if (n < 1) {funduSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[funduSlideIndex-1].style.display = "block";
  dots[funduSlideIndex-1].className += "active";
}

 