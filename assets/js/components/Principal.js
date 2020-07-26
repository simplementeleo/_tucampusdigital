Vue.component('Principal', {
    template: //html 
        `
    <section id="categories" class="main-categories mb-5">
        <div class="container">
            <h4> {{ title }} </h4>
            <div class="row">
                <div v-for="(category, index) in categories" class="col-md-3 col-sm-12">
                    <div data-aos="zoom-in" :data-aos-delay="category.delay" class="card mt-4">
                       <a :href="category.url" target="_blank">
                        <div class="img">
                            <!-- 253x300 -->
                            <img src="./assets/img/model-category.jpg" alt="Model Category">
                        </div>
                        <p class="p-3"> {{ category.name }} {{ index+1 }} </p>
                       </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
`,
    data() {
        return {
            title: 'Lorem, ipsum dolor.',
            categories: [
                { url: '#', img: '...', name: 'Category', delay: 100 },
                { url: '#', img: '...', name: 'Category', delay: 200 },
                { url: '#', img: '...', name: 'Category', delay: 300 },
                { url: '#', img: '...', name: 'Category', delay: 400 },
                { url: '#', img: '...', name: 'Category', delay: 500 },
                { url: '#', img: '...', name: 'Category', delay: 600 },
                { url: '#', img: '...', name: 'Category', delay: 700 },
                { url: '#', img: '...', name: 'Category', delay: 800 },
            ]
        }
    }
})