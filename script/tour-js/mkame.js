
// MKAME SLIDESHOW IMAGES

var mkameSlideIndex = 1;
previewMkameSlides(mkameSlideIndex);

// Next/previous controls
function mkamePlusSlides(n) {
  previewMkameSlides(mkameSlideIndex += n);
}

// Thumbnail image controls
function mkameCurrentSlide(n) {
  previewMkameSlides(mkameSlideIndex = n);
}

function previewMkameSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mkame-slides");
  var dots = document.getElementsByClassName("mkame-dot");
  if (n > slides.length) {mkameSlideIndex = 1}
  if (n < 1) {mkameSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[mkameSlideIndex-1].style.display = "block";
  dots[mkameSlideIndex-1].className += "active";
}

