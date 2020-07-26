Vue.component('Students', {
    template: //html
    `
    <section data-aos="zoom-in" class="students-watching">
        <div class="container">
            <h4 class="mb-3"> {{ title }} </h4>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-for="video in videos" class="swiper-slide">
                        <a :href="video.url" target="_blank">
                            <div class="video m-2">
                                <div class="play">
                                    <span></span>
                                </div>
                            </div>
                        </a>
                        <div class="content p-2 text-white">
                            <h5> {{ video.title }} </h5>
                            <p class="my-2"> {{ video.instructor }} </p>
                            <div class="d-flex">
                                <h5 class="pr-3"> {{ video.offer }} $</h5>
                                <span class="before"> {{ video.beforePrice }} $</span>
                            </div>
                            <div v-if="video.mostSold" class="alert alert-warning">
                                Lo más vendido
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>

        </div>
    </section>
    `,
    data(){
        return {
            title: 'Lorem, ipsum dolor.',
            videos: [
                { url: '#', title: 'Lorem ipsum, dolor.', instructor: 'Name Surname', offer: '11,99', beforePrice: '14,99', mostSold: true },
                { url: '#', title: 'Other ipsum, dolor.', instructor: 'Name Surname', offer: '12,99', beforePrice: '15,99', mostSold: false },
                { url: '#', title: 'Forea ipsum, dolor.', instructor: 'Name Surname', offer: '13,99', beforePrice: '16,99', mostSold: true },
                { url: '#', title: 'Goinas ipsum, dolor.', instructor: 'Name Surname', offer: '14,99', beforePrice: '17,99', mostSold: false },
                { url: '#', title: 'Active ipsum, dolor.', instructor: 'Name Surname', offer: '15,99', beforePrice: '19,99', mostSold: true },
             ]
        }
    }
})