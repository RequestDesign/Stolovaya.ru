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
    navigation: {
        nextEl: ".swiper-button-next",
    },
    slidesPerView: "auto",
    spaceBetween: `${remToPx(1.6)}rem`,

    breakpoints: {
        769: {
            spaceBetween: `${remToPx(2)}rem`,
            slidesPerView: 6,
        },
    },
});

//brands swiper
const swiperBrands = new Swiper(".catalogue__brands-slider", {
    loop: true,
    modules: [Navigation],
    spaceBetween: `${remToPx(1.2)}rem`,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        769: {
            spaceBetween: `${remToPx(1.6)}rem`,
        },
    },
});

//features swiper mobile
const swiperFeatures = new Swiper(".catalogue__features-slider", {
    loop: true,
    spaceBetween: `${remToPx(1.6)}rem`,
    slidesPerView: "auto",
});

//catalogue pagination
$(function () {
    const $pages = $(".cards-page");
    const $pagination = $(".pagination");
    const $buttonPrev = $(".button-prev");
    const $buttonNext = $(".button-next");
    let currentPage = 0;

    for (let i = 0; i < $pages.length; i++) {
        $pagination.append(`<button data-index="${i}">${i + 1}</button>`);
    }

    //show initial page
    showPage(currentPage);
    updateButtonState();

    //pagination button click
    $pagination.on("click", "button", function () {
        currentPage = parseInt($(this).attr("data-index"));
        showPage(currentPage);
        updateButtonState();
    });

    //next button click
    $buttonNext.on("click", function () {
        if (currentPage < $pages.length - 1) {
            currentPage++;
            showPage(currentPage);
            updateButtonState();
        }
    });

    //prev button click
    $buttonPrev.on("click", function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
            updateButtonState();
        }
    });

    //show the current page
    function showPage(index) {
        $pages.removeClass("active");
        $pages.eq(index).addClass("active");
        updatePagination();
    }

    //update pagination button styles
    function updatePagination() {
        $pagination.find("button").removeClass("active");
        $pagination.find(`button[data-index="${currentPage}"]`).addClass("active");
    }

    function updateButtonState() {
        $buttonPrev.prop("disabled", currentPage === 0);
        $buttonNext.prop("disabled", currentPage === $pages.length - 1);
    }
});

//filter range
$(function () {
    $(".filter__item--slider").each(function () {
        const rangeInput = $(this).find(".range-input input");
        const priceInput = $(this).find(".price-input input");
        const progress = $(this).find(".slider .progress");
        let priceGap = 1000;

        function updateSlider() {
            let minVal = parseInt(rangeInput.eq(0).val());
            let maxVal = parseInt(rangeInput.eq(1).val());
            let range = parseInt(rangeInput.eq(1).attr("max")) - parseInt(rangeInput.eq(0).attr("min"));

            let left = ((minVal - parseInt(rangeInput.eq(0).attr("min"))) / range) * 100 + "%";
            let width = ((maxVal - minVal) / range) * 100 + "%";

            progress.css({ left: left, width: width });

            priceInput.eq(0).val(minVal);
            priceInput.eq(1).val(maxVal);
        }

        priceInput.on("input", function (e) {
            let minVal = parseInt(priceInput.eq(0).val());
            let maxVal = parseInt(priceInput.eq(1).val());

            if (maxVal - minVal >= priceGap && maxVal <= 10000) {
                if (e.target.className === "input-min") {
                    rangeInput.eq(0).val(minVal);
                } else {
                    rangeInput.eq(1).val(maxVal);
                }

                updateSlider();
            }
        });

        rangeInput.on("input", function (e) {
            let minVal = parseInt(rangeInput.eq(0).val());
            let maxVal = parseInt(rangeInput.eq(1).val());

            if (maxVal - minVal < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput.eq(0).val(maxVal - priceGap);
                } else {
                    rangeInput.eq(1).val(minVal + priceGap);
                }
            } else {
                priceInput.eq(0).val(minVal);
                priceInput.eq(1).val(maxVal);
                updateSlider();
            }
        });
        priceInput.on("change", updateSlider);
        updateSlider();
    });
});

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
