// testimonial section
$(document).ready(function () {
  $(".testimonial-owl-carousel").owlCarousel();
});

$(".testimonial-owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsiveClass: true,
  navText: [
    "<i class='fas fa-long-arrow-alt-left fs-4 me-4 '></i>",
    "<i class='fas fa-long-arrow-alt-right fs-4'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
      nav: true,
      loop: true,
    },
  },
});

// Brands section
$(document).ready(function () {
  $(".brand-owl-carousel").owlCarousel();
});

$(".brand-owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 2000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: false,
      loop: true,
    },
  },
});
