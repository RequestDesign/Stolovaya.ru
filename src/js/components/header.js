import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

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

document.addEventListener("DOMContentLoaded", resizeInput);


// Открытие селекта в поиске
const select = document.querySelector('.header-middle_form_select-wrapper')
const dropdown = document.querySelector('.header-middle_dropdown-wrapper')
const arrowBtn = select.querySelector('.header-middle_form_select-btn')

function searchSelectOpen(e) {
    e.preventDefault();

    arrowBtn.classList.toggle('header-middle_form_select-btn--active')
    dropdown.classList.toggle('disabled')
}

select.addEventListener("click", searchSelectOpen);


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
const searchInputs = document.querySelectorAll('.header-middle_form_search')
const searchResult = document.getElementById('search-result')
const searchMobileBtn = document.querySelector('.header-middle_mobile-btn')

document.addEventListener('mouseup', (e) => {
    searchInputs.forEach((searchInput) => {
        const result = searchInput.parentNode.nextElementSibling
        const resultInput = result.nextElementSibling
        const withinBoundaries = e.composedPath().includes(result);
        const withinBoundariesInput = e.composedPath().includes(resultInput)
        console.log(withinBoundariesInput)
        if (e.target === searchInput) {
            if (document.documentElement.clientWidth <= 768) {
                document.querySelector('.header--mobile').querySelector('.header-top').classList.add('disabled')
                searchInput.classList.add('search--mobile')
                searchMobileBtn.classList.remove('disabled')
                document.body.style.overflow = 'hidden'
            }
            result.classList.add('show')
        }

        else if (!withinBoundaries && document.documentElement.clientWidth > 768) {
            result.classList.remove('show')
        }

        else if (e.target.closest('.header-middle_mobile-btn') && document.documentElement.clientWidth <= 768) {
            document.querySelector('.header--mobile').querySelector('.header-top').classList.remove('disabled')
            searchInput.classList.remove('search--mobile')
            searchMobileBtn.classList.add('disabled')
            result.classList.remove('show')
            result.nextElementSibling.classList.remove('show')
            document.body.style.overflow = 'auto'
        }

        // Отображение окна при вводе
        searchInput.addEventListener('input', () => {
            if (searchInput.value.length > 0) {
                result.classList.remove('show')
                result.nextElementSibling.classList.add('show')
            }
            else {
                result.classList.add('show')
                result.nextElementSibling.classList.remove('show')
            }
        })

        if (!withinBoundariesInput && document.documentElement.clientWidth > 768) {
            result.nextElementSibling.classList.remove('show')
        }
    })
})







const catalogBtn = document.querySelector('.header-middle_catalog-btn')
const catalogContainer = document.querySelector('.catalog-wrapper')
const overlay = document.createElement('div')
document.body.append(overlay)



document.addEventListener('mouseup', (e) => {
    const withinBoundaries = e.composedPath().includes(catalogContainer)
    if (e.target === catalogBtn || e.target.closest('.header-middle_catalog-btn')) {
        catalogContainer.classList.toggle('catalog--active')
        catalogBtn.querySelector('.catalog-btn_square').classList.toggle('disabled')
        catalogBtn.querySelector('.catalog-btn_cross').classList.toggle('disabled')
        overlay.classList.toggle('overlay')
        if (catalogContainer.classList.contains('catalog--active')) {
            window.scroll(0, 0)
        }
    }
    else if (!withinBoundaries) {
        catalogContainer.classList.remove('catalog--active')
        catalogBtn.querySelector('.catalog-btn_square').classList.remove('disabled')
        catalogBtn.querySelector('.catalog-btn_cross').classList.add('disabled')
        overlay.classList.remove('overlay')
    }
})

// Функционал открытия категорий внутри header каталога
// кнопка
const categoryBtns = document.querySelectorAll('.header-middle_catalog .main-categories_item')
// контейнер
const categoryBlocks = document.querySelectorAll('.header-middle_catalog .sub-categories_wrap')
const categoriesMobile = document.querySelectorAll('.category-mobile')

categoryBtns.forEach((categoryBtn) => {
    categoryBtn.addEventListener('click', (e) => {

        categoryBtns.forEach((categoryBtn) => {
            categoryBtn.classList.remove('item--active')
        })
        e.target.classList.add('item--active')

        const id = categoryBtn.id
        categoryBlocks.forEach((categoryBlock) => {
            if (categoryBlock.id === `${id}-block`) {
                categoryBlock.classList.add('active')
            }
            else {
                categoryBlock.classList.remove('active')
            }
        })
        categoriesMobile.forEach((categoryMobile) => {
            const parent = categoryMobile.parentNode
            if (categoryMobile.id === `${id}-block`) {
                parent.classList.remove('disabled')
                parent.previousElementSibling.classList.add('disabled')
                categoryMobile.classList.remove('disabled')
            }

            else {
                parent.classList.add('disabled')
                // parent.previousElementSibling.classList.remove('disabled')
                categoryMobile.classList.add('disabled')
            }

        })
    })
})

const closeBtns = document.querySelectorAll('.header-middle_catalog_btn')
const mobileCatalog = document.querySelector('.catalog--mobile')
const mobileCatalogItems = mobileCatalog.querySelectorAll('.catalog_item')

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
        mobileCatalog.classList.add('disabled')
        mobileCatalogItems.forEach((item) => {
            item.classList.add('disabled')
        })
    })
})

// Добавление необходимых отступов у Main для работы fixed шапки
const mains = document.getElementsByTagName('main')
document.addEventListener('DOMContentLoaded', () => {
    if (document.documentElement.clientWidth > 768) {
        mains[0].style.marginTop = 22.119 + 'rem'
    }
})

// Открытие мобильного каталога 
const mobileCatalogBtn = document.querySelector('.mobile-catalog-btn')
const mobileCatalogLeft = mobileCatalog.querySelector('.header-middle_catalog_left')

mobileCatalogBtn.addEventListener('click', (e) => {
    e.preventDefault()
    mobileCatalog.classList.remove('disabled')
    mobileCatalogLeft.classList.remove('disabled')
})

