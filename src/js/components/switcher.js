import $ from "jquery";

$('.switcher__btn').on('click', function (evt) {
    evt.preventDefault();
    let $this = $(this);
    let index = $this.index();
    let $switcher = $this.closest('.switcher');
    let $switcher_container = $switcher.find('.switcher__container');
    let $switcher_contents = $switcher_container.find('.switcher__content');
    $this.siblings('.switcher__btn').removeClass('active');
    $this.addClass('active');
    $switcher_contents.removeClass('active')
    $($switcher_contents[index]).addClass('active');
})