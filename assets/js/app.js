const app = new Vue({
    el: '#app',
    data: {
        widget1: [{
                icon: 'online-learning',
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'sketch',
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'team',
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        widget2: [{
                icon: 'idea',
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'fast-time',
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'certificate',
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ]
    },


});



// Configuration slide
var swiper = new Swiper('.swiper-container', {
    breakpoints: {
        1080: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerView: 4
        },
        770: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerView: 2,
        }

    },
    // width: 1700, 
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

AOS.init();