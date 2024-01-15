import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/scss/effect-fade'

const portfolioSwiper = new Swiper('.portfolio__swiper', {
    modules: [Navigation, EffectFade],
    direction: 'horizontal',
    loop: true,
    navigation: {
        prevEl: '.portfolio__swiper-btn-prev',
        nextEl: '.portfolio__swiper-btn-next'
    },
    slidesPerView: 1,
    
})

const portfolioBtn = document.querySelector('.portfolio__more-btn')
let portfolioCardsHidden = document.querySelectorAll('.portfolio__projects-container_project--hidden')

function portfolioShowCards(e) {
    e.preventDefault()

    let i = 0
    for (; i < 4; i++) {
        portfolioCardsHidden[0].classList.remove('portfolio__projects-container_project--hidden')
        portfolioCardsHidden = document.querySelectorAll('.portfolio__projects-container_project--hidden')
    }
    i = 0
    if (portfolioCardsHidden.length === 0) {
        portfolioBtn.remove()
    }
}

portfolioBtn.addEventListener('click', portfolioShowCards)
