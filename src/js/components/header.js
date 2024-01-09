import Swiper from 'swiper'
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'

function remToPx(remValue) {
    var htmlFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
    );
    var pxValue = remValue * htmlFontSize;
    return Math.round(pxValue) + "px";
}

const headerSwiper = new Swiper('.swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    spaceBetween: `${remToPx(1.6)}`,
    navigation: {
        nextEl: '.swiper-button-next'
    },
    slidesPerView: 'auto'
})

const searchSelect = document.querySelector('.search-select');

searchSelect.addEventListener('input', resizeInput);
resizeInput.call(searchSelect)

function resizeInput() {
    this.style.width = this.value.length + 'em'
}
