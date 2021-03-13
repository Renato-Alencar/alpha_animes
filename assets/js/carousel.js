$('.carousel').slick ({
    accessibility: true,
    arrows: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    }
  ]
});