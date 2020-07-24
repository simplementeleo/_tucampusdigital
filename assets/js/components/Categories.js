Vue.component('Categories', {
    template: //html
        `
        <section class="categories-video mb-5">

        <div class="container">

            <div class="row">
                <div class="col-md-7 col-sm-12">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p class="my-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate illo maxime
                        fugit
                        consequuntur distinctio in?</p>
                </div>
            </div>

            <ul class="nav nav-tabs" id="tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                        aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " id="#others-tab" data-toggle="tab" href="#others" role="tab"
                        aria-controls="others" aria-selected="true">Others</a>
                </li>
            </ul>
           

            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">



                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div v-for="i in 10" class="swiper-slide">
                                <div class="video m-2">
                                    <div class="play">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="p-2 text-white">
                                    <h5>Lorem ipsum dolor sit amet.</h5>
                                    <p class="my-2">Name Surname</p>

                                    <div class="d-flex">
                                        <h5 class="pr-3">11,99$</h5>
                                        <span class="text-light before">14,99$</span>
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

                <div class="tab-pane" id="others" role="tabpanel" aria-labelledby="others-tab">
                    <h4>Others</h4>
                </div>
            </div>



        </div>

    </section>
    `
})