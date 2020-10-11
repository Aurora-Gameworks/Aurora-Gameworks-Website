$(function () {
  $(".scroll").on("click", function (e) {
    e.preventDefault();
    var offset = $(window).height() * 0.08;
    var target = this.hash;
    var topPos = $(target).position().top;
    window.scrollTo(0, topPos - offset);
  });
});
