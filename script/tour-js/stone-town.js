
// STONE TOWN SLIDESHOW IMAGES

var stoneTownSlideIndex = 1;
previewStoneTownSlides(stoneTownSlideIndex);

// Next/previous controls
function stoneTownPlusSlides(n) {
  previewStoneTownSlides(stoneTownSlideIndex += n);
}

// Thumbnail image controls
function stoneTownCurrentSlide(n) {
  previewStoneTownSlides(stoneTownSlideIndex = n);
}

function previewStoneTownSlides(n) {
  var i;
  var slides = document.getElementsByClassName("stone-town-slides");
  var dots = document.getElementsByClassName("stone-town-dot");
  if (n > slides.length) {stoneTownSlideIndex = 1}
  if (n < 1) {stoneTownSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[stoneTownSlideIndex-1].style.display = "block";
  dots[stoneTownSlideIndex-1].className += "active";
}

