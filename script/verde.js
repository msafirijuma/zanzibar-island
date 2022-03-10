
// VERDE SLIDESHOW IMAGES

var verdeSlideIndex = 1;
previewVerdeSlides(verdeSlideIndex);

// Thumbnail image controls
function verdeCurrentSlide(n) {
  previewVerdeSlides(verdeSlideIndex = n);
}

function previewVerdeSlides(n) {
  var i;
  var slides = document.getElementsByClassName("verde-slides");
  var dots = document.getElementsByClassName("verde-dot");
  if (n > slides.length) {verdeSlideIndex = 1}
  if (n < 1) {verdeSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[verdeSlideIndex-1].style.display = "block";
  dots[verdeSlideIndex-1].className += "active";
}