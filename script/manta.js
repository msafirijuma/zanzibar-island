
// MANTA SLIDESHOW IMAGES

var mantaSlideIndex = 1;
previewMantaSlides(mantaSlideIndex);

// Thumbnail image controls
function mantaCurrentSlide(n) {
  previewMantaSlides(mantaSlideIndex = n);
}

function previewMantaSlides(n) {
  var i;
  var slides = document.getElementsByClassName("manta-slides");
  var dots = document.getElementsByClassName("manta-dot");
  if (n > slides.length) {mantaSlideIndex = 1}
  if (n < 1) {mantaSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[mantaSlideIndex-1].style.display = "block";
  dots[mantaSlideIndex-1].className += "active";
}

