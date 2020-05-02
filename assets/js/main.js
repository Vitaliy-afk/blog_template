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
}


function initBurgerMenu() {
  jQuery('.burger').on('click', function(e){
      e.preventDefault()
      jQuery(this).toggleClass('open');
      jQuery('body').toggleClass('burger-active');
  });
}

function initMasonry() {
  jQuery('.subhead').masonry({
    gutter: 50
  });
}

$('.subhead').masonry({
  columnWidth: 200,
  itemSelector: '.part',
  responsive: [
    {
    breakpoint: 1024,
        settings: {
        columnWidth: 200,
        itemSelector: '.part',
        }
      }
  ]
});

