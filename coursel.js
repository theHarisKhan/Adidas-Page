$(document).ready(function(){
    $('.Header--slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: `<button type="button" class="slick-prev"></button>`,
        nextArrow: `<button type="button" class="slick-next"></button>`,
        responsive: [
            {
            breakpoint: 600,
            settings: {
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,
            }
            },
            {
            breakpoint: 480,
            settings: {
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
        })
});

$('.product--slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".play--1").click(function () {
    $(".vid--1")[0].src += "?autoplay=1";
    $(".vid--1").show();
  });
  $(".play--2").click(function () {
    $(".vid--2")[0].src += "?autoplay=1";
    $(".vid--2").show();
  });
  $(".play--3").click(function () {
    $(".vid--3")[0].src += "?autoplay=1";
    $(".vid--3").show();
  });