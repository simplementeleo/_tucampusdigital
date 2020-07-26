Vue.component('Widgets', {
    template: //html
        `
   <div>
        <hr :class="{ 'd-none': !top }">
        <section class="container">
            <div class="row">
                <div v-for="(w, i) in widgets" class="col-md-4">
                    <div data-aos="slide-right" class="widget d-flex align-items-center justify-content-center mt-5">
                        <div class="icon mr-3">
                            <!-- icon -->
                        </div>
                        <div class="text">
                            <h5>{{ w.title }}</h5>
                            <p>{{ w.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr class="my-5">
   </div>
    `,
    props: ['widgets','top'],
})