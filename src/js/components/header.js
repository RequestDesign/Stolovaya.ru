import Swiper from 'swiper'
import { Navigation } from 'swiper/modules';
import 'swiper/css'

// function remToPx(remValue) {
//     var htmlFontSize = parseFloat(
//         getComputedStyle(document.documentElement).fontSize
//     );
//     var pxValue = remValue * htmlFontSize;
//     return Math.round(pxValue) + "px";
// }

const headerSwiper = new Swiper('.header-bottom-swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.header-bottom-swiper-button-next'
    },
    slidesPerView: 'auto'
})


// Авто-смена размера селекта
const selectInput = document.querySelector('.header-middle_form_select');

function resizeInput() {
    selectInput.style.width = selectInput.value.length + 'rem'
}

document.addEventListener('DOMContentLoaded', resizeInput)


// Открытие селекта в поиске
const select = document.querySelector('.header-middle_form_select-wrapper')
const dropdown = document.querySelector('.header-middle_dropdown-wrapper')
const arrowBtn = select.querySelector('.header-middle_form_select-btn')

function searchSelectOpen(e) {
    e.preventDefault()

    arrowBtn.classList.toggle('header-middle_form_select-btn--active')
    dropdown.classList.toggle('disabled')
    console.log(true)
}

select.addEventListener('click', searchSelectOpen)


// Функционал селекта в поиске
const options = dropdown.querySelectorAll('.header-middle_dropdown-wrapper_option')

function selectChange(e) {
    e.preventDefault()

    const target = e.target.textContent
    selectInput.value = target
    resizeInput()
}

options.forEach(function (option) {
    option.addEventListener('click', selectChange)
})


// Открытие и закрытие окна поиска
const searchInput = document.querySelector('.header-middle_form_search')
const searchResult = document.getElementById('search-result')

document.addEventListener('mouseup', (e) => {
    if (e.target === searchInput) {
        searchResult.classList.add('show')
    }
    else if (e.target != searchResult && e.target != searchInput) {
        searchResult.classList.remove('show')
    }

})

const catalogBtn = document.querySelector('.header-middle_catalog-btn')
const catalogBtnImg = catalogBtn.getElementsByTagName('img')
const catalogContainer = document.querySelector('.catalog-wrapper')

catalogBtn.addEventListener('click', () => {
    catalogContainer.classList.toggle('catalog--active')
    // if(catalogBtnImg.src === "../assets/images/header/catalog-btn.svg") {
    //     catalogBtnImg.src = "../assets/images/header/catalog-btn-cross.svg"
    // }
    // else {
    //     catalogBtnImg.src = "../assets/images/header/catalog-btn.svg"
    // }
    console.log(catalogBtnImg.src)
})

// Функционал открытия категорий внутри header каталога
// кнопка
const categoryBtns = document.querySelectorAll('.header-middle_catalog .main-categories_item')
// контейнер
const categoryBlocks = document.querySelectorAll('.header-middle_catalog .sub-categories_wrap')

categoryBtns.forEach((categoryBtn) => {
    categoryBtn.addEventListener('click', (e) => {
        if(!categoryBtn.classList.contains('item--active')) {
            categoryBtn.classList.add('item--active')
            console.log(true)
        }
        else {
            categoryBtn.classList.remove('item--active')
            console.log(false)
        }

        const id = categoryBtn.id
        categoryBlocks.forEach((categoryBlock) => {
            if(categoryBlock.id === `${id}-block`) {
                categoryBlock.classList.add('active')
            }
            else {
                categoryBlock.classList.remove('active')
            }
        })
    })
})