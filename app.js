$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    speed: 650,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
  });

  $("#menu, .menuscroll").click(function() {
    $("html, body").animate({ scrollTop: $('#menu').offset().top }, 270);
  })
});
