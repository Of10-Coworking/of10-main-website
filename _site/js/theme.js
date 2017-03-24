function scroll() {
    $(window).scroll(function() {
        $(this).scrollTop() > 300 ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut()
    }), $(".scroll-top").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800), !1
    }), $('.scroll-down[href^="#"], .scroll-to-target[href^="#"]').on("click", function(e) {
        e.preventDefault();
        var i = this.hash,
            a = $(i);
        $("html, body").stop().animate({
            scrollTop: a.offset().top
        }, 900, "swing", function() {
            window.location.hash = i
        })
    })
}

function header() {
    function e() {
        $(window).height(), $(window).width() > 767
    }
    $(window).scroll(function() {
        $(this).scrollTop() > 1 ? ($(".header").addClass("sticky"), $(".inner-inro").css("z-index", "-1")) : ($(".header").removeClass("sticky"), $(".inner-inro").css("z-index", "auto"))
    }), e(), $(window).resize(function() {
        e()
    })
}



function pushmenu() {
    $(".toggle-menu").jPushMenu()
}

function fullScreenSlider() {
    function e() {
        var e = ($(window).width(), $(window).height());
        $(window).width() > 767 ? $(".hero-slider-1 .slides li").css("height", e) : $(".hero-slider-1 .slides li").css("height", "400px")
    }
    $(".fullscreen-carousel").length > 0 && $(".fullscreen-carousel").flexslider({
        animation: "slide",
        animationSpeed: 700,
        animationLoop: !0,
        slideshow: !0,
        easing: "swing",
        controlNav: !1,
        before: function(e) {
            $(".fullscreen-carousel .overlay-hero .caption-hero").fadeOut().animate({
                top: "80px"
            }, {
                queue: !1,
                easing: "easeOutQuad",
                duration: 700
            }), e.slides.eq(e.currentSlide).delay(400), e.slides.eq(e.animatingTo).delay(400)
        },
        after: function(e) {
            $(".fullscreen-carousel .flex-active-slide").find(".caption-hero").fadeIn(2e3).animate({
                top: "0"
            }, {
                queue: !1,
                easing: "easeOutQuad",
                duration: 1200
            }), BackgroundCheck.refresh()
        },
        start: function(e) {
            $("body").removeClass("loading"), BackgroundCheck.init({
                targets: ".full-intro",
                images: ".flexslider li img"
            })
        },
        useCSS: !0
    }), e(), $(window).resize(function() {
        e()
    })
}

function sliderAll() {
    $(".image-slider").owlCarousel({
        navigation: !0,
        pagination: !0,
        slideSpeed: 350,
        paginationSpeed: 400,
        singleItem: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoPlay: !1,
        autoHeight: !0,
        responsive: !0
    }), $(".client-carousel").owlCarousel({
        autoPlay: 2500,
        stopOnHover: !0,
        items: 5,
        itemsDesktop: [1170, 4],
        itemsDesktopSmall: [1024, 3],
        itemsTabletSmall: [768, 2],
        itemsMobile: [480, 1],
        pagination: !1,
        navigation: !1,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    }), $(".content-carousel").owlCarousel({
        autoPlay: !0,
        autoHeight: !0,
        stopOnHover: !0,
        singleItem: !0,
        slideSpeed: 500,
        pagination: !1,
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: !0
    }), $(".item5-carousel").owlCarousel({
        autoPlay: 2500,
        stopOnHover: !0,
        items: 5,
        itemsDesktop: [1170, 3],
        itemsDesktopSmall: [1024, 2],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        pagination: !0,
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    }), $(".item4-carousel").owlCarousel({
        autoPlay: 2500,
        stopOnHover: !0,
        items: 4,
        itemsDesktop: [1170, 3],
        itemsDesktopSmall: [1024, 2],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        pagination: !1,
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    }), $(".item3-carousel").owlCarousel({
        autoPlay: !1,
        stopOnHover: !0,
        items: 3,
        itemsDesktop: [1170, 3],
        itemsDesktopSmall: [1024, 2],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        pagination: !0,
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    }), $(".item1-carousel").owlCarousel({
        autoPlay: !1,
        autoHeight: !0,
        stopOnHover: !0,
        singleItem: !0,
        slideSpeed: 350,
        pagination: !0,
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: !0
    })
}

function sliderHero() {
    function e() {
        $(".slider-hero .overlay-hero .caption-hero").fadeOut(1)
    }

    function i() {
        $(".slider-hero .owl-item.active ").find(".caption-hero").delay(500).fadeIn(1500), BackgroundCheck.refresh()
    }

    function a() {
        $(".slider-hero .owl-item.active ").find(".caption-hero").delay(500).fadeIn(1500), BackgroundCheck.init({
            targets: ".full-intro",
            images: ".owl-carousel .item img"
        })
    }
    $(".slider-hero").owlCarousel({
        navigation: !0,
        slideSpeed: 700,
        paginationSpeed: 400,
        pagination: !0,
        addClassActive: !0,
        touchDrag: !0,
        singleItem: !0,
        navigationText: !1,
        autoPlay: !1,
        autoHeight: !1,
        beforeMove: e,
        afterMove: i,
        afterInit: a
    }), $(window).height(function() {
        function e() {
            var e = $(window).innerHeight();
            $(".slider-hero, .full-screen-intro").css("height", e)
        }
        e(), $(window).resize(function() {
            e()
        })
    })
}

function containerGridMasonry() {
    if ($(this).length > 0) {
        var e = $(".container-masonry");
        e.imagesLoaded(function() {
            e.isotope({
                itemSelector: ".nf-item",
                layoutMode: "masonry",
                masonry: {
                    columnWidth: 0,
                    gutter: 0
                }
            })
        }), $(".container-filter").on("click", ".categories", function() {
            var i = $(this).attr("data-filter");
            e.isotope({
                filter: i
            })
        });
        var i = $(".container-grid");
        i.imagesLoaded(function() {
            i.isotope({
                itemSelector: ".nf-item",
                layoutMode: "fitRows"
            })
        }), $(".container-filter").on("click", ".categories", function() {
            var e = $(this).attr("data-filter");
            i.isotope({
                filter: e
            })
        }), $(".categories-filter").each(function(e, i) {
            var a = $(i);
            a.on("click", ".categories", function() {
                a.find(".active").removeClass("active"), $(this).addClass("active")
            })
        })
    }
    if ($(this).length > 0) {
        var a = $(".masonry");
        a.masonry({
            itemSelector: ".nf-item"
        })
    }
}

function scrollCallbackEle() {
    $(".load-ele-fade").viewportChecker({
        classToAdd: "visible animated fadeIn",
        offset: 100,
        callbackFunction: function(e, i) {}
    }), wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }), wow.init()
}

function shortcodeElements() {
    function e(e) {
        var i = $(window).scrollTop(),
            a = $(".parallax").height(),
            t = .5 * i,
            o = -(.5 * i),
            n = i / a;
        $(".parallax").hasClass("parallax-section1") && e.css("top", t), $(".parallax").hasClass("parallax-section2") && e.css("top", o), $(".parallax").hasClass("parallax-static") && e.css("top", 1 * i), $(".parallax").hasClass("parallax-opacity") && e.css("opacity", 1 - 1 * n), $(".parallax").hasClass("parallax-background1") && e.css("background-position", "left " + t + "px"), $(".parallax").hasClass("parallax-background2") && e.css("background-position", "left " + -t + "px")
    }

    function i() {
        $(".cbox-gallary1").colorbox({
            rel: "gallary",
            maxWidth: "95%",
            maxHeight: "95%"
        }), $(".cbox-iframe").colorbox({
            iframe: !0,
            maxWidth: "95%",
            maxHeight: "95%",
            innerWidth: 640,
            innerHeight: 390
        })
    }

    function a() {
        $(".skillbar").each(function() {
            $(this).find(".skillbar-bar").animate({
                width: $(this).attr("data-percent")
            }, 2e3)
        })
    }
    $(".parallax").each(function() {
        var i = $(this);
        $(window).scroll(function() {
            e(i)
        }), e(i)
    }), $.stellar({
        horizontalScrolling: !1,
        verticalOffset: 500
    }), i(), a(), $(".tipped").tipper(), $(".counter").each(function() {
        var e = $(this),
            i = e.attr("data-count");
        $({
            countNum: e.text()
        }).animate({
            countNum: i
        }, {
            duration: 8e3,
            easing: "linear",
            step: function() {
                e.text(Math.floor(this.countNum))
            },
            complete: function() {
                e.text(this.countNum)
            }
        })
    })
}

function accordion() {
    $(".accordion-title").click(function(e) {
        $(this).next().slideToggle("easeOut"), $(this).toggleClass("active"), $("accordion-title").toggleClass("active"), $(".accordion-content").not($(this).next()).slideUp("easeIn"), $(".accordion-title").not($(this)).removeClass("active")
    }), $(".accordion-content").addClass("defualt-hidden")
}

function jqueryUi() {
    
}! function(e) {
    "use strict";

    function i() {
        fullScreenSlider(), header(), scroll(), a(), pushmenu(), sliderHero(), sliderAll(), containerGridMasonry(), scrollCallbackEle(), shortcodeElements()
    }

    function a() {
        e(window).resize(function() {})
    }
    e(window).load(function() {
        e("#loader").fadeOut(), e("#preloader").delay(350).fadeOut("slow"), e("body").delay(350).css({
            overflow: "visible"
        })
    }), e(document).ready(function() {
        i()
    })
}(jQuery), shortcodeElements(), accordion(), jqueryUi();