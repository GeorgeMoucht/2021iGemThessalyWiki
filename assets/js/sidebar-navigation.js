$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        
        var page1Top = $("#first").offset().top;
        var page2Top = $("#second").offset().top;
        var page3Top = $("#third").offset().top;
        var page4Top = $("#fourth").offset().top;

        if (scrollPos >= page1Top && scrollPos < page2Top) {
        $("#link_1").addClass("active");
        $("#link_2").removeClass("active");
        $("#link_3").removeClass("active");
        $("#link_4").removeClass("active");
        } else {
        $("#link_1").removeClass("active");
        }

        if (scrollPos >= page2Top && scrollPos < page3Top) {
        $("#link_2").addClass("active");
        $("#link_1").removeClass("active");
        $("#link_3").removeClass("active");
        $("#link_4").removeClass("active");
        } else {
        $("#link_2").removeClass("active");
        }
        
        if (scrollPos >= page3Top && scrollPos < page4Top) {
        $("#link_3").addClass("active");
        $("#link_1").removeClass("active");
        $("#link_2").removeClass("active");
        $("#link_4").removeClass("active");
        } else {
        $("#link_3").removeClass("active");
        }

        if (scrollPos >= page4Top) {
        $("#link_4").addClass("active");
        $("#link_1").removeClass("active");
        $("#link_2").removeClass("active");
        $("#link_3").removeClass("active");
        } else {
        $("#link_4").removeClass("active");
        }

    });
    });