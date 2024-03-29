import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import $ from "jquery";

if ($(".filter__item--slider").length) {
    $(function () {
        noUiSlider.cssClasses.target += " range-slider";

        function initializeSlider(sliderElement, minInputId, maxInputId, onSliderUpdate) {
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
                if (onSliderUpdate) {
                    onSliderUpdate(handle, Math.round(values[handle]));
                }
            });

            const setRangeSlider = function (i, value) {
                const arr = [null, null];
                arr[i] = value;

                slider.noUiSlider.set(arr);
            };

            inputs.forEach(function (el, index) {
                el.on("change", function (e) {
                    setRangeSlider(index, $(this).val());
                    setRangeValue(el, el.val());
                });
            });
        }

        function setRangeValue($inputElement, value) {
            value = value.slice(0, 10);
            $inputElement.val(value);
            adjustInputWidth($inputElement);
        }

        initializeSlider("sliderPrice", "rangeMinPrice", "rangeMaxPrice", function (handle, value) {
            if (handle === 0) {
                setRangeValue($("#rangeMinPrice"), value.toString());
            } else {
                setRangeValue($("#rangeMaxPrice"), value.toString());
            }
        });
    });

    const $rangeMinInput = $("#rangeMinPrice");
    const $rangeMaxInput = $("#rangeMaxPrice");

    function adjustInputWidth($inputElement) {
        $inputElement.css("width", "6rem");
        $inputElement.css("width", $inputElement[0].scrollWidth + "px");
    }

    $rangeMinInput.add($rangeMaxInput).on("input", function () {
        const $currentInput = $(this);
        if ($currentInput.val().length > 10) {
            $currentInput.val($currentInput.val().slice(0, 10));
        }
        adjustInputWidth($currentInput);
    });
}
