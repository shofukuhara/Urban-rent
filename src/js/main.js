$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
$(function () {
  speed = 6000;
  easing = "easeInOutCubic";
  // タグ生成
  $(".mask").wrap("<div class='mask-wrap'>");
  $(".mask").append("<div class='mask-bg'></div>");
  $(".mask").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this)
          .stop()
          .animate({ left: "0%" }, function () {
            $(this).find(".mask-bg").stop().animate({ left: "100%" });
          });
      }
    }
  );
});
