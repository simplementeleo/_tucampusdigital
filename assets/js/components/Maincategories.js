Vue.component('MainCategories', {
    template: //html 
        `
    <section class="main-categories mb-5">
        <div class="container">
            <h4> {{ title }} </h4>
            <div class="row">
                <div v-for="(index, category) in categories" class="col-md-3 col-sm-12">
                    <div class="card mt-4">
                        <div class="img">
                            <!-- <img src="..." alt="..."> -->
                        </div>
                        <p class="p-3"> {{ category.name }} {{ index++ }} </p>
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
                { url: '#', img: '...', name: 'Category' },
                { url: '#', img: '...', name: 'Category' },
                { url: '#', img: '...', name: 'Category' },
                { url: '#', img: '...', name: 'Category' },
                { url: '#', img: '...', name: 'Category' },
                { url: '#', img: '...', name: 'Category' },
                { url: '#', img: '...', name: 'Category' },
            ]
        }
    }
})