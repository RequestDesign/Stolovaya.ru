import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import $ from "jquery";

function remToPx(remValue) {
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    var pxValue = remValue * htmlFontSize;
    return Math.round(pxValue) + "px";
}

//portfolio swiper
const swiperPortfolio = new Swiper(".swiper-portfolio", {
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween: `${remToPx(2)}rem`,
});

//partners cards
if ($('.about__clients').length) {
    $("#loadMorePartnersLink").on("click", function() {
        $(".partners-card").slideDown();
        $(this).hide();
    });

    function adjustPartnersVisibility() {
        if ($(window).width() < 769) {
            $(".partners-card").hide();
            $(".partners-card:lt(10)").show();
            $("#loadMorePartnersLink").show();
        } else {
            $(".partners-card").show();
            $("#loadMorePartnersLink").hide();
        }
    }
    adjustPartnersVisibility();

    $(window).on('resize', function() {
        adjustPartnersVisibility();
    });
};

//clients cards
if ($('.about__clients').length) {
    $("#loadMoreClientsLink").on("click", function() {
        $(".card-clients").slideDown();
        $(this).hide();
    });

    function adjustClientsVisibility() {
        if ($(window).width() < 769) {
            $(".card-clients").hide();
            $(".card-clients:lt(10)").show();
            $("#loadMoreClientsLink").show();
        } else {
            $(".card-clients").show();
            $("#loadMoreClientsLink").hide();
        }
    }
    adjustClientsVisibility();

    $(window).on('resize', function() {
        adjustClientsVisibility();
    });
};

