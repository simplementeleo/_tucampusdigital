Vue.component('Instructor', {
    template: //html
        `
    <section id="instructor" class="instructor d-flex align-items-center">
        <div class="background"></div>
        <div class="container">
            <div class="row align-items-center">
                <div data-aos="zoom-in" class="col-md-6 col-sm-12 d-flex justify-content-center">
                    <img src="./assets/img/instructor.jpg" alt="Instructor">
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="card p-4">
                        <h3 data-aos="fade-up-right"> {{ title }} </h3>
                        <p data-aos="fade-up-right" data-aos-delay="200"> {{ text }} </p>
                        <button data-aos="fade-up-right" data-aos-delay="400" href="#" class="mt-4 btn btn-primary">
                            {{ button }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            title: 'Lorem ipsum dolor sit.', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet dignissimos quam. Laudantium quaerat necessitatibus, id commodi voluptates odit ratione saepe inventore aut a molestias aspernatur distinctio sed atque explicabo!',
            button: 'Lorem ipsum dolor sit.'
        }
    }
})