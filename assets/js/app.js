const app = new Vue({
    el: '#app',
    data: {
        widget1: [{
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ],
        widget2: [{
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                title: 'Lorem ipsum dolor.',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ]
    },

});




// Tabs 
$('#tabs a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
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


var swiper = new Swiper('.swiper-container .one', {
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
        nextEl: '.swiper-button-next .one',
        prevEl: '.swiper-button-prev .one',
    },
});
