
// fort SLIDESHOW IMAGES

var fortSlideIndex = 1;
previewFortSlides(fortSlideIndex);

// Next/previous controls
function fortPlusSlides(n) {
  previewFortSlides(fortSlideIndex += n);
}

// Thumbnail image controls
function fortCurrentSlide(n) {
  previewFortSlides(fortSlideIndex = n);
}

function previewFortSlides(n) {
  var i;
  var slides = document.getElementsByClassName("fort-slides");
  var dots = document.getElementsByClassName("fort-dot");
  if (n > slides.length) {fortSlideIndex = 1}
  if (n < 1) {fortSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[fortSlideIndex-1].style.display = "block";
  dots[fortSlideIndex-1].className += "active";
}

