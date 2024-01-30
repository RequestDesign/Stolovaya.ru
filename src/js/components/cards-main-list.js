import $ from "jquery";

$(function () {
    $(".cards-main-list").each(function () {
        let $section = $(this);

        if ($section.find(".card-main.hidden").length) {
            $section.find(".cards-main-list__btn button").on("click", function () {
                let hiddenCards = $section.find(".card-main.hidden");

                for (let i = 0; i < 4; i++) {
                    if (hiddenCards[i]) {
                        $(hiddenCards[i]).slideDown();
                        $(hiddenCards[i]).removeClass("hidden").css("display", "flex");
                    }
                }

                if ($section.find(".card-main.hidden").length === 0) {
                    $section.find(".cards-main-list__btn").css("display", "none");
                }
            });
        }
    });
});
