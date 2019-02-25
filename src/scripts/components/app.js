$(document).ready(function () {

    //Sliders
    (function () {
        //Brands slider
        (function () {
            const $slider = $('.brands-slider');

            $slider.slick({
                dots: true,
                slidesToShow: 6,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5
                        }
                    },
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

        //preview carousel
        (function () {
            const $slider = $('.preview-carousel');

            $slider.slick();

        })();
    })();



});
