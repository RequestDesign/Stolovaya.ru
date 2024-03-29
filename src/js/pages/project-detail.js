import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import $ from "jquery";

function remToPx(remValue) {
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    var pxValue = remValue * htmlFontSize;
    return Math.round(pxValue) + "px";
}

//gallery swiper
function initSwiper() {
    var windowWidth = $(window).width();

    if (windowWidth < 769) {
        $(".project-detail__gallery__items").addClass("swiper-wrapper");
        $(".project-detail__gallery").addClass("swiper swiper-gallery");
        $(".project-detail__gallery__item").addClass("swiper-slide");

        new Swiper(".swiper-gallery", {
            modules: [Navigation],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            spaceBetween: `${remToPx(2)}rem`,
        });
    }
}

$(function () {initSwiper()});
$(window).on("resize", function () {initSwiper()});
