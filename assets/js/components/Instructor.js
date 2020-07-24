Vue.component('Instructor', {
    template: //html
        `
    <section class="instructor d-flex align-items-center">
        <div class="background"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 col-sm-12 d-flex justify-content-center">
                    <img src="./assets/img/instructor.jpg" alt="Instructor">
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="card p-4">
                        <h3> {{ title }} </h3>
                        <p> {{ text }} </p>
                        <button href="#" class="mt-4 btn btn-primary">
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