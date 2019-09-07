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
    nextArrow: '<button type="button" class="main-features__team-buttons-next"></button>'
  });
});