"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  function openDrawer() {
    $(".js-sp-nav").fadeIn();
    $(".js-hamburger").addClass("is-open");
    $("body").css("overflow", "hidden");
    $(hamburger).removeClass('is-open');
  }
  function closeDrawer() {
    $(".js-sp-nav").fadeOut();
    $(".js-hamburger").removeClass("is-open");
    $("body").css("overflow", "initial");
  }
  var hamburger = $(".js-hamburger");
  var close = $(".js-close");
  $(function () {
    $(hamburger).on("click", function () {
      $(this).toggleClass("is-open");
      if ($(this).hasClass("is-open")) {
        openDrawer();
      } else {
        closeDrawer();
      }
    });
  });
  $(function () {
    $(close).on("click", function () {
      $(hamburger).toggleClass("is-open");
      if ($(this).hasClass("is-open")) {
        openDrawer();
      } else {
        closeDrawer();
      }
    });
  });
  $(function () {
    $(body).on("click", function () {
      $(hamburger).toggleClass("is-open");
      if ($(this).hasClass("is-open")) {
        openDrawer();
      } else {
        closeDrawer();
      }
    });
  });

  // backgroundまたはページ内リンクをクリックで閉じる
  $(".js-sp-nav a[href]").on("click", function () {
    closeDrawer();
  });

  // resizeイベント
  $(window).on('resize', function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  });
  $(window).on('scroll', function () {
    var top = $(this).scrollTop();
    var mainView = $('.js-main-view').outerHeight();
    var header = $('.js-header').outerHeight();
    if (mainView - header <= top) {
      $('.js-header').addClass('is-fixed');
    } else {
      $('.js-header').removeClass('is-fixed');
    }
  });
  var fadeIn = $('.js-fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("is-scroll-in");
      }
    });
  });
});
$(function () {
  function fixed() {
    $("body").css("position", "fixed");
  }
  function initial() {
    $("body").css("position", "");
  }
  function load01() {
    $('.js-load01').addClass("is-load");
  }
  function close01() {
    $('.js-load01').removeClass("is-load");
  }
  function load02() {
    $('.js-load02').addClass("is-load");
  }
  function close02() {
    $('.js-load02').removeClass("is-load");
  }
  function load03() {
    $('.js-load03').addClass("is-load");
  }
  function close03() {
    $('.js-load03').removeClass("is-load");
  }
  $(window).on('load', function () {
    setTimeout(function () {
      fixed();
    }, 0);
    setTimeout(function () {
      load01();
    }, 100);
    setTimeout(function () {
      close01();
    }, 2000);
    setTimeout(function () {
      load02();
    }, 2200);
    setTimeout(function () {
      close02();
    }, 4200);
    setTimeout(function () {
      load03();
    }, 4500);
    setTimeout(function () {
      close03();
    }, 6700);
    setTimeout(function () {
      initial();
    }, 8000);
  });
});