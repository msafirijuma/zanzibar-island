
// NGEZI FOREST SLIDESHOW IMAGES

var ngeziForestSlideIndex = 1;
previewNgeziForestSlides(ngeziForestSlideIndex);

// Next/previous controls
function ngeziForestPlusSlides(n) {
  previewNgeziForestSlides(ngeziForestSlideIndex += n);
}

// Thumbnail image controls
function ngeziForestCurrentSlide(n) {
  previewNgeziForestSlides(ngeziForestSlideIndex = n);
}

function previewNgeziForestSlides(n) {
  var i;
  var slides = document.getElementsByClassName("ngezi-forest-slides");
  var dots = document.getElementsByClassName("ngezi-forest-dot");
  if (n > slides.length) {ngeziForestSlideIndex = 1}
  if (n < 1) {ngeziForestSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[ngeziForestSlideIndex-1].style.display = "block";
  dots[ngeziForestSlideIndex-1].className += "active";
}

