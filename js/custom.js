var carouselWidth = $(".comments")[0].scrollWidth;
var cardWidth = $(".comment").width();
var scrollPosition = 0;
$(".carousel-control-next").on("click", function () {
  if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
    scrollPosition += cardWidth;  //update scroll position
    $(".comments").animate({ scrollLeft: scrollPosition },600); //scroll left
  }
});
$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".comments").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});

var multipleCardCarousel = document.querySelector(
  "#commentsControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  //rest of the code
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
