$(document).ready(function() {
  $("button#blackWhite").click(function() {
    $("body").removeClass();
    $("body").addClass("switch");
    $(".column p").addClass("switchColumn");

  });
  $("button#whiteBlack").click(function() {
    $("body").removeClass("switch");
  });
});
