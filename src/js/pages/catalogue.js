import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

function remToPx(remValue) {
    var htmlFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
    );
    var pxValue = remValue * htmlFontSize;
    return Math.round(pxValue) + "px";
}

const swiper = new Swiper(".catalogue__category-slider", {
    modules: [Navigation],
    spaceBetween: `${remToPx(2)}rem`,
    slidesPerView: 6,
    navigation: {
        nextEl: ".swiper-button-next",
    }
});