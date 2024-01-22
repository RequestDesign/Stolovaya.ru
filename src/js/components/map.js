import $ from "jquery";

if ($(".contacts").length) {
    ymaps.ready(init);

    let main = [55.94671, 37.573029];
    let stock = [55.921665, 37.630295];

    function init() {
        let map = new ymaps.Map("map", {
            center: [55.933523, 37.604265],
            zoom: 13,
        });

        map.controls.remove("geolocationControl"); //геолокация
        map.controls.remove("searchControl"); //поиск
        map.controls.remove("trafficControl"); // контроль трафика
        map.controls.remove("typeSelector"); // тип
        map.controls.remove("fullscreenControl"); //переход в полноэкранный режим
        map.controls.remove("zoomControl"); // контрол зуммирования
        map.controls.remove("rulerControl"); //  контрол правил

        let placemarkMain = new ymaps.Placemark(
            main,
            {},
            {
                iconLayout: "default#image",
                iconImageHref: "./assets/images/contacts/pin-orange.png",
                iconImageSize: [39, 40],
                iconImageOffset: [-10, -30],
            }
        );

        let placemarkStock = new ymaps.Placemark(
            stock,
            {},
            {
                iconLayout: "default#image",
                iconImageHref: "./assets/images/contacts/pin-blue.png",
                iconImageSize: [39, 40],
                iconImageOffset: [-10, -30],
            }
        );

        map.geoObjects.add(placemarkMain);
        map.geoObjects.add(placemarkStock);
    }
}
