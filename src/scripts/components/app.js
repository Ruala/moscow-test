$(document).ready(function () {

    (function () {
        const $slider = $('.brands-slider');

        $slider.slick({
            dots: true,
            slidesToShow: 6,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

    })();



});
