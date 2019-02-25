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
                            slidesToShow: 4,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 410,
                        settings: {
                            slidesToShow: 1,
                            dots: false
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
