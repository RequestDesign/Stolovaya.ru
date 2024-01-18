import $ from "jquery";
$(function () {
    $(document).on("keyup", (evt) => {
        evt.key === 27 ? closeModal() : null;
    });

    $("[data-modal]").on("click", () => {
        $("body").addClass("lock");
    });

    $(".modal-back").on("click", closeModal);
    $(".modal-exit").on("click", closeModal);

    function closeModal() {
        $(".modal").removeClass("active");
        $("body").removeClass("lock");
    }

    $('[data-modal="close-modal"]').on("click", () => {
        closeModal();
    });
});

$('[data-modal="thanks"]').on("click", (e) => {
    e.preventDefault()
    $(".modal-thanks").addClass("active");
});

$('[data-modal="request"]').on("click", (e) => {
    e.preventDefault()
    $(".modal-request").addClass("active");
});
