"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var hamburger = $(".js-hamburger");
  var close = $(".js-close");
  var spNav = $(".js-sp-nav");
  function openDrawer() {
    $(".js-sp-nav").addClass("is-open");
    $("body").css("overflow", "hidden");
  }
  function closeDrawer() {
    $(".js-sp-nav").removeClass("is-open");
    $("body").css("overflow", "initial");
  }
  $(function () {
    $(hamburger).on("click", function () {
      if ($(spNav).hasClass("is-open")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  });
  $(function () {
    $(close).on("click", function () {
      if ($(spNav).hasClass("is-open")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  });
  $(".js-sp-nav a[href]").on("click", function () {
    closeDrawer();
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
      if (scroll > offset - windowHeight + 300) {
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
  function loader() {
    $('.js-loader').addClass("is-load");
  }
  function mainView() {
    $('.js-main-view').addClass("is-load");
  }
  function mainTitle() {
    $('.js-main-title').addClass("is-load");
  }
  function mainLeft() {
    $('.js-main-left').addClass("is-load");
  }
  function mainRight() {
    $('.js-main-right').addClass("is-load");
  }
  function header() {
    $('.js-header').addClass("is-load");
  }
  function headerNone() {
    $('.js-header').addClass("is-none");
  }
  setTimeout(function () {
    fixed();
  }, 0);
  setTimeout(function () {
    load01();
  }, 100);
  setTimeout(function () {
    close01();
  }, 1800);
  setTimeout(function () {
    load02();
  }, 2000);
  setTimeout(function () {
    close02();
  }, 4000);
  setTimeout(function () {
    load03();
  }, 4300);
  setTimeout(function () {
    close03();
  }, 6300);
  setTimeout(function () {
    loader();
  }, 7600);
  setTimeout(function () {
    mainView();
  }, 8000);
  setTimeout(function () {
    mainTitle();
  }, 9500);
  setTimeout(function () {
    mainLeft();
  }, 10600);
  setTimeout(function () {
    mainRight();
  }, 10600);
  setTimeout(function () {
    header();
  }, 10500);
  setTimeout(function () {
    initial();
  }, 8000);
  setTimeout(function () {
    headerNone();
  }, 12000);
});

// swiper
var kaki_swiper = new Swiper(".js-kaki-swiper", {
  spaceBetween: 90,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  breakpoints: {
    540: {
      slidesPerView: 'auto'
    }
  }
});