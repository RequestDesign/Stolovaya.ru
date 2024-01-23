import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

if (document.documentElement.clientWidth <= 768) {
  const workflowSwiper = new Swiper(".workflow-swiper", {
    modules: [Navigation],
    direction: "horizontal",
    loop: false,
    navigation: {
      prevEl: ".workflow-swiper_button-prev",
      nextEl: ".workflow-swiper_button-next",
    },
    slidesPerView: 1,
  });
}

Fancybox.bind("[data-fancybox='gallery']", {
  // Your custom options
  Thumbs: false,
  Toolbar: false,
  contentClick: "iterateZoom",
  Images: {
    Panzoom: {
      maxScale: 2,
    },
  },
  //   tpl: {

  //   }
  on: {
    done: (fancybox, slide) => {
      console.log(fancybox, slide);
      const contents = document.querySelectorAll(".fancybox__content");
      //   const footerNav = document.querySelector(".fancybox__nav");
      //   contents.forEach((content) => {
      //     content.appendChild(footerNav);
      //   });
    },
  },
});
