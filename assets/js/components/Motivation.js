Vue.component('Motivation', {
    template: //html
        `
    <section class="motivation-video">
        <div class="container">
            <div class="row py-5">
                <div class="col-md-6 col-sm-12">
                    <h3> {{ title }} </h3>
                    <p> {{ text }} </p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <h1 class="text-center">video</h1>
                </div>
            </div>
        </div>
        <hr>
    </section>
    `,
    data() {
        return {
            title: 'Lorem ipsum dolor sit amet consectetur.',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo delectus totam perspiciatis facere. Similique sunt dolor doloribus labore ducimus!',
            
        }
    }
})