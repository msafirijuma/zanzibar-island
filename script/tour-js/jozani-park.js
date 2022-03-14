
// jozaniPark SLIDESHOW IMAGES

var jozaniParkSlideIndex = 1;
previewJozaniParkSlides(jozaniParkSlideIndex);

// Next/previous controls
function jozaniParkPlusSlides(n) {
  previewJozaniParkSlides(jozaniParkSlideIndex += n);
}

// Thumbnail image controls
function jozaniParkCurrentSlide(n) {
  previewJozaniParkSlides(jozaniParkSlideIndex = n);
}

function previewJozaniParkSlides(n) {
  var i;
  var slides = document.getElementsByClassName("jozani-park-slides");
  var dots = document.getElementsByClassName("jozani-park-dot");
  if (n > slides.length) {jozaniParkSlideIndex = 1}
  if (n < 1) {jozaniParkSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[jozaniParkSlideIndex-1].style.display = "block";
  dots[jozaniParkSlideIndex-1].className += "active";
}

