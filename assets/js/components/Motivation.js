Vue.component('Motivation', {
    template: //html
        `
    <section class="motivation-video">
        <div class="container">
            <div class="row py-5 justify-content-center align-items-center">
                <div class="col-md-6 col-sm-12">
                    <h3> {{ title }} </h3>
                    <p> {{ text }} </p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <!-- <h1 class="text-center">video</h1> -->
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/TgZUHw7kGX0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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