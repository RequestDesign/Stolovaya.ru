import IMask from "imask";
import $ from "jquery";

$(function () {
    if ($("#phone-mask").length) {
        IMask(document.getElementById("phone-mask"), {
            mask: "+{7}(000)000-00-00",
        });
    }

    $(".request__input input, .request__input textarea").on("input", function () {
        let $parentLabel = $(this).closest(".request__input");
        if ($(this).val().trim() !== "") {
            $parentLabel.find(".request__input-placeholder").css("opacity", 0);
        } else {
            $parentLabel.find(".request__input-placeholder").css("opacity", 1);
        }
    });
});

