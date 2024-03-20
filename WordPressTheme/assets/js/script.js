"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var hamburger = $(".js-hamburger");
  var close = $(".js-close");
  hamburger.on("click", function () {
    if ($(this).hasClass('is-open')) {
      $('.js-sp-nav').fadeOut();
      $(this).removeClass('is-open');
      $(close).removeClass('is-open');
    } else {
      $('.js-sp-nav').fadeIn();
      $(this).addClass('is-open');
      $(close).addClass('is-open');
    }
  });
  close.on("click", function () {
    $('.js-sp-nav').fadeOut();
    $(hamburger).removeClass('is-open');
  });
});