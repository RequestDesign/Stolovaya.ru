import $ from "jquery";

$(function () {
    $(".request__input input, .request__input textarea").on("input", function () {
        let $parentLabel = $(this).closest(".request__input");
        if ($(this).val().trim() !== "") {
            $parentLabel.find(".request__input-placeholder").css("opacity", 0);
        } else {
            $parentLabel.find(".request__input-placeholder").css("opacity", 1);
        }
    });
});

