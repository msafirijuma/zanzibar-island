
// MKUMBUU SLIDESHOW IMAGES

var mkumbuuSlideIndex = 1;
previewMkumbuuSlides(mkumbuuSlideIndex);

// Next/previous controls
function mkumbuuPlusSlides(n) {
  previewMkumbuuSlides(mkumbuuSlideIndex += n);
}

// Thumbnail image controls
function mkumbuuCurrentSlide(n) {
  previewMkumbuuSlides(mkumbuuSlideIndex = n);
}

function previewMkumbuuSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mkumbuu-slides");
  var dots = document.getElementsByClassName("mkumbuu-dot");
  if (n > slides.length) {mkumbuuSlideIndex = 1}
  if (n < 1) {mkumbuuSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[mkumbuuSlideIndex-1].style.display = "block";
  dots[mkumbuuSlideIndex-1].className += "active";
}

