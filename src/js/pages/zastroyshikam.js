import Swiper from "swiper";
import { remToPx } from "../utils/constants";
import { Navigation } from "swiper/modules";

const reviews = new Swiper(".reviews__slider", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: remToPx(4),
  navigation: {
    prevEl: ".reviews__navigation-prev",
    nextEl: ".reviews__navigation-next",
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: remToPx(2),
    },
  },
});
