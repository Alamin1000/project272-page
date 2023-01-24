$(document).ready(function () {
  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);

  $("#board-tab-nav-select").on("change", function (e) {
    var $optionSelected = $("option:selected", this);
    $optionSelected.tab("show");
  });
});
