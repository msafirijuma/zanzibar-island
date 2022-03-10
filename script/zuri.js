
// ZURI SLIDESHOW IMAGES

var zuriSlideIndex = 1;
previewZuriSlides(zuriSlideIndex);

// Thumbnail image controls
function zuriCurrentSlide(n) {
  previewZuriSlides(zuriSlideIndex = n);
}

function previewZuriSlides(n) {
  var i;
  var slides = document.getElementsByClassName("zuri-slides");
  var dots = document.getElementsByClassName("zuri-dot");
  if (n > slides.length) {zuriSlideIndex = 1}
  if (n < 1) {zuriSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[zuriSlideIndex-1].style.display = "block";
  dots[zuriSlideIndex-1].className += "active";
}

