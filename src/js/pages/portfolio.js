import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/scss/effect-fade";
import $ from "jquery";

const portfolioSwiper = new Swiper(".portfolio__swiper", {
    modules: [Navigation, EffectFade],
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    speed: 1000,
    direction: "horizontal",
    loop: true,
    navigation: {
        prevEl: ".portfolio__swiper-btn-prev",
        nextEl: ".portfolio__swiper-btn-next",
    },
    slidesPerView: 1,
});

if ($(".portfolio").length) {
    const $portfolioCards = $(".portfolio__projects-container_project");
    const $portfolioBtn = $(".portfolio__more-btn");

    $portfolioBtn.on("click", function () {
        const hiddenCards = $portfolioCards.filter(":hidden");
        hiddenCards.slice(0, 4).slideDown();
        if (hiddenCards.length <= 4) {
            $portfolioBtn.hide();
        }
    });

    function adjustCardsVisibility() {
        if ($(window).width() < 769) {
            $portfolioCards.hide();
            $portfolioCards.slice(0, 10).show();
            $portfolioBtn.show();
        } else {
            $portfolioCards.show();
            $portfolioBtn.hide();
        }
    }

    adjustCardsVisibility();

    $(window).on("resize", function () {
        adjustCardsVisibility();
    });
}
