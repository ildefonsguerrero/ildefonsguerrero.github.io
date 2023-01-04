$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $(".responsive").slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".responsive_1").slick({
    dots: true,
    slide: "li",
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".responsive_2").slick({
    dots: true,
    slide: "li",
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".noticias_m").slick({
    dots: true,
    vertical: true,
    slide: "li",
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
  });

  $(".news_sidebar_3").slick({
    dots: true,
    vertical: true,
    slide: "li",
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  $(".news_sidebar_2").slick({
    dots: true,
    vertical: true,
    slide: "li",
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
  });

  $(".news_sidebar_1").slick({
    dots: true,
    vertical: true,
    slide: "li",
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".condiciones").fancybox();
  $(".newsletter").fancybox();
});
