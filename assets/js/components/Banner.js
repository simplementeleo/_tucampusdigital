Vue.component('Banner', {
    template: //html
    `
    <section class="banner my-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-sm-12 p-5 text-center text-white">
                    <h1> {{ title }} </h1>
                    <p> {{ text }} </p>
                    <button href="#" class="btn mt-4 btn-outline-light">
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