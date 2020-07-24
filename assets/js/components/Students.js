Vue.component('Students', {
    template: //html
    `
    <section class="students-watching">
        <div class="container">
            <h4 class="mb-3">Lorem ipsum dolor sit amet.</h4>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-for="i in 10" class="swiper-slide">
                        <div class="video m-2">
                            <div class="play">
                                <span></span>
                            </div>
                        </div>
                        <div class="content p-2 text-white">
                            <h5>Lorem ipsum dolor sit amet.</h5>
                            <p class="my-2">Name Surname</p>

                            <div class="d-flex">
                                <h5 class="pr-3">11,99$</h5>
                                <span class="before">14,99$</span>
                            </div>
                            <div class="alert alert-warning">
                                Lo más vendido
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
                <!-- Add Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>

        </div>
    </section>
    `
})