$(document).ready(function(){
  $('.header-slider').slick({
    autoplay: true,
    dots: true
  });

  $('.main-features__team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScrol: 1,
    appendArrows: '.main-features__team-buttons',
    prevArrow: '<button type="button" class="main-features__team-buttons-prev"></button>',
    nextArrow: '<button type="button" class="main-features__team-buttons-next"></button>',
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 677,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 531,
        settings: {
          slidesToShow: 1,
        }
      }
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});