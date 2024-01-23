import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

if (document.documentElement.clientWidth <= 768) {
    const workflowSwiper = new Swiper('.workflow-swiper', {
        modules: [Navigation],
        direction: "horizontal",
        loop: false,
        navigation: {
            prevEl: '.workflow-swiper_button-prev',
            nextEl: '.workflow-swiper_button-next'
        },
        slidesPerView: 1
    })
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
    tpl: {
        prev:  '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg xmlns="http://www.w3.org/2000/svg" width="9" height="19" viewBox="0 0 9 19" fill="none"><path d="M8.86651 18.1162L1.00026 10.25C0.765922 10.0156 0.634277 9.69767 0.634277 9.36621C0.634277 9.03476 0.765922 8.71687 1.00026 8.48246L8.86651 0.616211V18.1162Z" fill="#8AD74E"/></svg></button>'
      },
});