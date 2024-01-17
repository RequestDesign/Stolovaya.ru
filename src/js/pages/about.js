import $ from "jquery";

//partners cards
if ($('.about__partners').length) {
    const $partnersCards = $(".partners-card");
    const $loadMorePartnersLink = $("#loadMorePartnersLink");

    $loadMorePartnersLink.on("click", function() {
        const hiddenCards = $partnersCards.filter(':hidden');
        hiddenCards.slice(0, 4).slideDown();
        if (hiddenCards.length <= 4) {
            $loadMorePartnersLink.hide();
        }
    });

    function adjustPartnersVisibility() {
        if ($(window).width() < 769) {
            $partnersCards.hide();
            $partnersCards.slice(0, 10).show();
            $loadMorePartnersLink.show();
        } else {
            $partnersCards.show();
            $loadMorePartnersLink.hide();
        }
    }

    adjustPartnersVisibility();

    $(window).on('resize', function() {
        adjustPartnersVisibility();
    });
}


//clients cards
if ($('.about__clients').length) {
    const $clientsCards = $(".card-clients");
    const $loadMoreClientsLink = $("#loadMoreClientsLink");

    $loadMoreClientsLink.on("click", function() {
        const hiddenCards = $clientsCards.filter(':hidden');
        hiddenCards.slice(0, 4).slideDown();
        if (hiddenCards.length <= 4) {
            $loadMoreClientsLink.hide();
        }
    });

    function adjustClientsVisibility() {
        if ($(window).width() < 769) {
            $clientsCards.hide();
            $clientsCards.slice(0, 10).show();
            $loadMoreClientsLink.show();
        } else {
            $clientsCards.show();
            $loadMoreClientsLink.hide();
        }
    }

    adjustClientsVisibility();

    $(window).on('resize', function() {
        adjustClientsVisibility();
    });
}

