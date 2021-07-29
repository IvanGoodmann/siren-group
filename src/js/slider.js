import "slick-carousel/slick/slick";

$(".initSlider").slick({
  autoPlay: true,
  infinite: true,
  arrows: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
});