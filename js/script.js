$(document).ready(function () {
  $(".invisible-content").hide();
  $(document).on("click", "#btns", function () {
    var moreLessButton = $(".invisible-content").is(":visible")
      ? "Read More"
      : "Read Less";
    $(this).text(moreLessButton);
    $(this).parent(".boxes").find(".invisible-content").toggle();
    $(this).parent(".boxes").find(".visible-content").toggle();
  });
});
