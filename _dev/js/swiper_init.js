var swiper = new Swiper('.swiper-container', {
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});