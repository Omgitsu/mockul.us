$(function () {
  // only called the first time it enters the view
  $('.whoa').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass("whoa-in-view");
    }
  });

  // called every time it enters the view
  $('.whoa').bind('inview', function (event, visible) {
    if (visible) {
      // pass
    }
  });
});
