jQuery(document).ready(function ($) {
  $(".flexslider").flexslider({
    namespace: "flex-",
    controlsContainer: ".flex-container",
    animation: "slide",
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 5000,
    animationSpeed: 3000,
    randomize: false,
  });
});
