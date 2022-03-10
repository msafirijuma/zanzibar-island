
// AIYANA SLIDESHOW IMAGES

var aiyanaSlideIndex = 1;
previewAiyanaSlides(aiyanaSlideIndex);

// Next/previous controls
function aiyanaPlusSlides(n) {
  previewAiyanaSlides(aiyanaSlideIndex += n);
}

// Thumbnail image controls
function aiyanaCurrentSlide(n) {
  previewAiyanaSlides(aiyanaSlideIndex = n);
}

function previewAiyanaSlides(n) {
  var i;
  var slides = document.getElementsByClassName("aiyana-slides");
  var dots = document.getElementsByClassName("aiyana-dot");
  if (n > slides.length) {aiyanaSlideIndex = 1}
  if (n < 1) {aiyanaSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[aiyanaSlideIndex-1].style.display = "block";
  dots[aiyanaSlideIndex-1].className += "active";
}

