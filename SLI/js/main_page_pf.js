var $grid = $(".grid_main_filter").isotope({
  itemSelector: ".item",
  percentPosition: true,
  layoutMode: "fitRows",
});

$(".filters ul li").click(function () {
  $(".filters ul li").removeClass("active");
  $(this).addClass("active");

  var data = $(this).attr("data-filter");
  $grid.isotope({
    filter: data,
  });
});