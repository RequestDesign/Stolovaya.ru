import IMask from "imask";
import $ from "jquery";

if ($("#phone-mask").length) {
    IMask(document.getElementById("phone-mask"), {
        mask: "+{7}(000)000-00-00",
    });
}
