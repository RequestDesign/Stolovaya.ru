import Swiper from 'swiper'
import { Navigation } from 'swiper/modules';
import 'swiper/css'

function remToPx(remValue) {
    var htmlFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
    );
    var pxValue = remValue * htmlFontSize;
    return Math.round(pxValue) + "px";
}

const headerSwiper = new Swiper('.swiper-header', {
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

if (searchSelect){
    searchSelect.addEventListener('input', resizeInput);
    resizeInput.call(searchSelect)
}

function resizeInput() {
    this.style.width = this.value.length + '5px'
}

const select = document.querySelector('.search-select_wrapper')
const dropdown = document.querySelector('.dropdown-wrapper')
const arrowBtn = select.querySelector('.select-btn')

function searchSelectOpen(e) {
    e.preventDefault()

    arrowBtn.classList.toggle('arrow--active')
    dropdown.classList.toggle('disabled')
}

select.addEventListener('click', searchSelectOpen)

const selectInput = document.querySelector('.search-select')
const options = dropdown.querySelectorAll('.search-select__option')

function selectChange(e) {
    const target = e.target.textContent
    selectInput.value = target

}

options.forEach(function (option) {
    option.addEventListener('click', selectChange)
})

const header = document.querySelector('.header--desk')
const fixed = header.offsetHeight;

