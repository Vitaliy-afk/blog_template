jQuery( document ).ready(function() {
  initBurgerMenu();
  initMasonry();
  initSlickSlider();
});

function initSlickSlider() {
  jQuery('.slider-block').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    easing: 'ease',
    infinity: true,
    vertical: true,
    
    // autoplaySpeed: 500
    // verticalSwiping: true
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true
    //       }
    //     }
    // ]


  });
  jQuery('.slider-section').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3000,
    easing: 'ease',
    infinity: true,
    // autoplay: true,
    // autoplaySpeed: 500
});

jQuery('.slider-minibox').slick({
  arrows: true,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 3000,
  easing: 'ease',
  infinity: true,
  // autoplay: true,
  // autoplaySpeed: 500
});

}



function initBurgerMenu() {
  jQuery('.burger').on('click', function(e){
      e.preventDefault()
      jQuery(this).toggleClass('open');
      jQuery('body').toggleClass('burger-active');
  });
}



function initMasonry() {
  jQuery('.grid').masonry({
    gutter: 55
  });
}

$('.grid').masonry({
  columnWidth: 140,
  itemSelector: '.part',
});

