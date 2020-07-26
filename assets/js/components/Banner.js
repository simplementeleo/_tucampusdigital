Vue.component('Banner', {
    template: //html
    `
    <section class="banner my-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-sm-12 p-5 text-center text-white">
                    <h1 data-aos="fade-up-right"> {{ title }} </h1>
                    <p data-aos="fade-up-right"> {{ text }} </p>
                    <button data-aos="fade-up-right" href="#" class="btn mt-4 btn-outline-light">
                        {{ button }}
                    </button>
                </div>
            </div>
        </div>
    </section>
    `,
    data(){
        return {
            title: 'Lorem ipsum dolor sit amet consectetur.',
            text: 'Lorem ipsum dolor sit amet consectetur.',
            button: 'Lorem, ipsum.'
        }
    }
})