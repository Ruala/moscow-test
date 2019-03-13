$(document).ready(function () {

    //Sliders
    (function () {
        //Brands slider
        (function () {
            const $slider = $('.brands-slider');

            $slider.slick({
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
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
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

        //sidebar slider
        (function () {
            const $slider = $('.sidebar-slider');

            $slider.slick();

        })();
    })();

    /*Yandex map*/
    (function(){
        const $mapWrapper = $('.map-wrapper');

        if (!$mapWrapper.length) return;

        const $mapInfo = $mapWrapper.find('.map__info');
        const $mapInfoCounter = $mapInfo.find('.map__counter');
        const $mapInfoList = $mapInfo.find('.map__list');
        const placemarksData = [
            {
                title: 'Адрес сервиса',
                coords: [55.7385,37.4821],
                hintContent: 'Сервис!'
            },
            {
                title: 'Адрес сервиса',
                coords: [55.7129,37.4855],
                hintContent: 'Сервис!'
            },
            {
                title: 'Адрес сервиса',
                coords: [55.7323,37.5447],
                hintContent: 'Сервис!'
            },
            {
                title: 'Адрес сервиса',
                coords: [55.7012,37.5568],
                hintContent: 'Сервис!'
            },
            {
                title: 'Адрес сервиса',
                coords: [55.7181,37.5732],
                hintContent: 'Сервис!'
            },
            {
                title: 'Адрес сервиса',
                coords: [55.7225,37.6090],
                hintContent: 'Сервис!'
            },
            {
                title: 'Адрес сервиса',
                coords: [55.7193,37.6467],
                hintContent: 'Сервис!'
            },
            {
                title: 'Адрес сервиса',
                coords: [55.7025,37.6695],
                hintContent: 'Сервис!'
            },
            {
                title: 'Адрес сервиса',
                coords: [55.7378,37.6953],
                hintContent: 'Сервис!'
            },
            {
                title: 'Адрес сервиса',
                coords: [55.7253,37.7431],
                hintContent: 'Сервис!'
            }
        ];

        const $firstScript = $('script').eq(0);
        const script = document.createElement('script');
        const $script = $(script);

        script.async = true;
        $firstScript.before($script);
        $script.on('load', function () {
            ymaps.ready(init);
        });
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

        $mapInfoCounter.text(placemarksData.length);

        function init(){
            const myMap = new ymaps.Map('map', {
                center: [55.7207,37.6110], //[55.7207,37.6234],
                zoom: 12
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap.behaviors.disable('scrollZoom');

            for (const placemarkData of placemarksData) {
                const placemark = new ymaps.Placemark(placemarkData.coords, {
                    hintContent: placemarkData.hintContent,
                    balloonContent: 'hello'
                },
                    {
                        preset: 'islands#redIcon'
                    });
                const $li = $(`<li>${placemarkData.title}</li>`);

                $mapInfoList.append($li);
                $li.on('click', e => {
                    e.preventDefault();

                    placemark.balloon.open();
                });

                myMap.geoObjects.add(placemark);
            }
        }

    })();

    //Toggler
    (function () {
        const $targets = $('.js-toggle-nav');

        $targets.each(function () {
            const $target = $(this);
            const activeClassName = 'active';
            const $showMoreBtn = $target.siblings('.btn-show-more');
            const $targetItems = $target.children();
            const minCount = 10;

            if ($targetItems.length < minCount) return;

            $targetItems.each((index, item) => {
                if (index > minCount) return;

                $(item).addClass(activeClassName);
            });
            const targetStartHeight = $target.height() + 'px';
            $targetItems.addClass(activeClassName);
            const targetEndHeight = $target.height() + 'px';

            $target.css({
                height: targetStartHeight,
            });
            $showMoreBtn.show();

            $showMoreBtn.on('click', clickBtnHandler);

            function clickBtnHandler() {
                $showMoreBtn.toggleClass(activeClassName);
                $target.animate({
                    height: $showMoreBtn.hasClass(activeClassName) ? targetEndHeight : targetStartHeight
                }, 500);
            }
        });

    })();

});
