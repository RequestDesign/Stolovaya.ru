import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import $ from "jquery";

function remToPx(remValue) {
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    var pxValue = remValue * htmlFontSize;
    return Math.round(pxValue) + "px";
}

//category swiper
const swiper = new Swiper(".catalogue__category-slider", {
    loop: true,
    modules: [Navigation],
    spaceBetween: `${remToPx(2)}rem`,
    slidesPerView: 6,
    navigation: {
        nextEl: ".swiper-button-next",
    },
});

//brands swiper
const swiperBrands = new Swiper(".catalogue__brands-slider", {
    loop: true,
    modules: [Navigation],
    spaceBetween: `${remToPx(1.2)}rem`,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".swiper-button-next",
    },
});

//main catalogue swiper
// const swiperCatalogue = new Swiper(".catalogue__main-slider", {
//     modules: [Navigation],
//     slidesPerView: 1,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });








//filter range
const rangevalue = document.querySelector(".slider-line .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");

let priceGap = 500;

const priceInputvalue = document.querySelectorAll(".price-input-wrapper input");
for (let i = 0; i < priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input", (e) => {
        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp - minp;

        if (minp < 0) {
            priceInputvalue[0].value = 0;
            minp = 0;
        }
        if (maxp > 1000000) {
            priceInputvalue[1].value = 1000000;
            maxp = 1000000;
        }

        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;

            if (minp < 0) {
                priceInputvalue[0].value = 0;
                minp = 0;
            }
        }

        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
            if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp / value1) * 100}%`;
            } else {
                rangeInputvalue[1].value = maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
            }
        }
    });

    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", (e) => {
            let minVal = parseInt(rangeInputvalue[0].value);
            let maxVal = parseInt(rangeInputvalue[1].value);

            let diff = maxVal - minVal;

            if (diff < priceGap) {
                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                } else {
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            } else {
                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
            }
        });
    }
}

//sorting dropdown
$(function () {
    $(".catalogue__sorting__top").on("click", function () {
        $(".catalogue__sorting").toggleClass("open");
        $(".catalogue__sorting__dropdown").slideToggle();
    });

    $(".catalogue__sorting__dropdown .option").on("click", function () {
        let selectedOptionText = $(this).text();
        $(".sort-by").text(selectedOptionText);
        $(".catalogue__sorting").removeClass("open");
        $(".catalogue__sorting__dropdown").slideUp();
    });
});
