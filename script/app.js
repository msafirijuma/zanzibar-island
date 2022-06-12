 var hamburger = document.querySelector(".hamburger");

    hamburger.onclick = function () {
        var navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    }

// CAROUSEL (AUTO SLIDE SHOW) SCRIPT

var slideIndex = 0;

  // Next/previous controls
        showSlides();

          function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
              slideIndex = 1
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
}
          

  

    

    // MANUAL SLIDESHOWS

  // I will use these manual slideshow to alternate through my pictures int other section...............


// Ngezi Forest Manual Slides
var ngeziSlideIndex = 1;
previewNgeziSlides(ngeziSlideIndex);

// Next/previous controls
function ngeziPlusSlides(n) {
  previewNgeziSlides(ngeziSlideIndex += n);
}

// Thumbnail image controls
function ngeziCurrentSlide(n) {
  previewNgeziSlides(ngeziSlideIndex = n);
}

function previewNgeziSlides(n) {
  var i;
  var ngeziSlides = document.getElementsByClassName("ngezi-slides");
  var dots = document.getElementsByClassName("dot-ngezi");
  if (n > ngeziSlides.length) {ngeziSlideIndex = 1}
  if (n < 1) {ngeziSlideIndex = ngeziSlides.length}
  for (i = 0; i < ngeziSlides.length; i++) {
      ngeziSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  ngeziSlides[ngeziSlideIndex-1].style.display = "block";
  dots[ngeziSlideIndex-1].className += "active";
}


// Jozani Manual Slides

 
var jozaniSlideIndex = 1;
previewJozaniSlides(jozaniSlideIndex);

// Next/previous controls
function jozaniPlusSlide(n) {
  previewJozaniSlides(jozaniSlideIndex += n);
}

// Thumbnail image controls
function jozaniCurrentSlide(n) {
  previewJozaniSlides(jozaniSlideIndex = n);
}

function previewJozaniSlides(n) {
  var i;
  var slides = document.getElementsByClassName("jozani-slides");
  var dots = document.getElementsByClassName("dot-jozani");
  if (n > slides.length) {jozaniSlideIndex = 1}
  if (n < 1) {jozaniSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[jozaniSlideIndex-1].style.display = "block";
  dots[jozaniSlideIndex-1].className += "active";
}



// Stone Town Darajani Market


 
var marketSlideIndex = 1;
previewMarketSlides(marketSlideIndex);

// Next/previous controls
function marketPlusSlide(n) {
  previewMarketSlides(marketSlideIndex += n);
}

// Thumbnail image controls
function marketCurrentSlide(n) {
  previewMarketSlides(marketSlideIndex = n);
}

function previewMarketSlides(n) {
  var i;
  var slides = document.getElementsByClassName("market-slides");
  var dots = document.getElementsByClassName("dot-market");
  if (n > slides.length) { marketSlideIndex = 1 }
  if (n < 1) { marketSlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[marketSlideIndex - 1].style.display = "block";
  dots[marketSlideIndex - 1].className += "active";
}
  

  // SLIDE SHOW IMAGES FOR ACCOMODATION AND HOTELS

  var accomodationSlideIndex = 1;
  showDivs(accomodationSlideIndex);

  function plusDivs(n) {
    showDivs(accomodationSlideIndex += n);
  }

  function currentDiv(n) {
    showDivs(accomodationSlideIndex = n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("hotels-slides");
    var dots = document.getElementsByClassName("demo-btn");
    if (n > x.length) { accomodationSlideIndex = 1 }
    if (n < 1) { accomodationSlideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    x[accomodationSlideIndex - 1].style.display = "block" ;
    dots[accomodationSlideIndex - 1].className += "active";
  }

