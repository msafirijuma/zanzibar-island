
// MANTA SLIDESHOW IMAGES

var seviSlideIndex = 1;
previewSeviSlides(seviSlideIndex);

// Next/previous controls
function seviPlusSlides(n) {
  previewSeviSlides(seviSlideIndex += n);
}

// Thumbnail image controls
function seviCurrentSlide(n) {
  previewSeviSlides(seviSlideIndex = n);
}

function previewSeviSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sevi-slides");
  var dots = document.getElementsByClassName("sevi-dot");
  if (n > slides.length) {seviSlideIndex = 1}
  if (n < 1) {seviSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[seviSlideIndex-1].style.display = "block";
  dots[seviSlideIndex-1].className += "active";
}

