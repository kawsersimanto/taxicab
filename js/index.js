// preloader
$(window).load(function () {
  $(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
});

// counter js
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

// aos js
AOS.init();
