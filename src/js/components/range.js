import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import $ from "jquery";

$(function () {
    noUiSlider.cssClasses.target += " range-slider";

    function initializeSlider(sliderElement, minInputId, maxInputId) {
        const slider = $("#" + sliderElement)[0];
        const inputMin = $("#" + minInputId);
        const inputMax = $("#" + maxInputId);

        noUiSlider.create(slider, {
            start: [20000, 820000],
            connect: true,
            range: {
                min: 20000,
                max: 1000000,
            },
            step: 1000,
        });

        const inputs = [inputMin, inputMax];

        slider.noUiSlider.on("update", function (values, handle) {
            inputs[handle].val(Math.round(values[handle]));
        });

        const setRangeSlider = function (i, value) {
            const arr = [null, null];
            arr[i] = value;

            slider.noUiSlider.set(arr);
        };

        inputs.forEach(function (el, index) {
            el.on("change", function (e) {
                setRangeSlider(index, $(this).val());
            });
        });
    }

    initializeSlider("sliderPrice", "rangeMinPrice", "rangeMaxPrice");
    initializeSlider("sliderDepth", "rangeMinDepth", "rangeMaxDepth");
    initializeSlider("sliderHeight", "rangeMinHeight", "rangeMaxHeight");
    initializeSlider("sliderWidth", "rangeMinWidth", "rangeMaxWidth");
});
