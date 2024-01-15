const footerMobile = document.querySelector(".footer-content--mobile")
const footerSpoilerBtns = footerMobile.querySelectorAll(".footer-content__block__title");


function footerSpoilerEvent(event) {
   const target = event.target.parentNode.querySelector(".footer-content__block__list")
   target.classList.toggle("footer--active")

};

footerSpoilerBtns.forEach(function (footerSpoilerBtn) {
    footerSpoilerBtn.addEventListener("click", footerSpoilerEvent)

});

