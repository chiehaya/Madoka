
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    const hamburger = $(".js-hamburger");
    const close = $(".js-close")
    const spNav = $(".js-sp-nav")

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

$(window).on('scroll',function(){
    let top = $(this).scrollTop();
    let mainView = $('.js-main-view').outerHeight();
    let header = $('.js-header').outerHeight();
    if ((mainView - header) <= top) {
        $('.js-header').addClass('is-fixed');
    }
    else {
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
        loader();
    }, 8200);
    setTimeout(function () {
        mainView();
    }, 8700);
    setTimeout(function () {
        mainTitle();
    }, 9500);
    setTimeout(function () {
        mainLeft();
    }, 11000);
    setTimeout(function () {
        mainRight();
    }, 11000);
    setTimeout(function () {
        header();
    }, 11000);

    setTimeout(function () {
        initial();
    }, 7000);


});
