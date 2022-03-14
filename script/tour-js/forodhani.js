
// FORODHANI SLIDESHOW IMAGES

var forodhaniSlideIndex = 1;
previewForodhaniSlides(forodhaniSlideIndex);

// Next/previous controls
function forodhaniPlusSlides(n) {
  previewForodhaniSlides(forodhaniSlideIndex += n);
}

// Thumbnail image controls
function forodhaniCurrentSlide(n) {
  previewForodhaniSlides(forodhaniSlideIndex = n);
}

function previewForodhaniSlides(n) {
  var i;
  var slides = document.getElementsByClassName("forodhani-slides");
  var dots = document.getElementsByClassName("forodhani-dot");
  if (n > slides.length) {forodhaniSlideIndex = 1}
  if (n < 1) {forodhaniSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[forodhaniSlideIndex-1].style.display = "block";
  dots[forodhaniSlideIndex-1].className += "active";
}

