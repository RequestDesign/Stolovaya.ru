import { remToPx } from "../utils/constants";
import Swiper from "swiper";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";

const productThumbs = new Swiper(".detail__slider-thumbs", {
  slidesPerView: 4,
  spaceBetween: remToPx(2),
});

const productMain = new Swiper(".detail__slider-main", {
  modules: [EffectFade, Navigation, Thumbs],
  slidesPerView: "auto",
  effect: "fade",
  thumbs: { swiper: productThumbs },
  speed: 800,
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    prevEl: ".detail__slider-prev",
    nextEl: ".detail__slider-next",
  },
});

const tabs = document.querySelectorAll(".detail_info__tabs-item");
const contents = document.querySelectorAll(".detail_info__content-item");
tabs.forEach((item, id) => {
  item.addEventListener("click", () => {
    contents.forEach((content) => content.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));
    item.classList.add("active");
    contents[id].classList.add("active");
  });
});
