import $ from "jquery";
import Swiper from "swiper";
import {
	Navigation,
} from "swiper/modules";

function remToPx(remValue) {
    var htmlFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
    );
    var pxValue = remValue * htmlFontSize;
    return Math.round(pxValue) + "px";
}

const categorySwiper = new Swiper(".catalogue__category-slider", {
    slidesPerView: 3,
    // spaceBetween: `${remToPx(2)}rem`,
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
      },
});