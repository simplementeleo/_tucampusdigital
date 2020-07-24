Vue.component('WorkWithUs',{
    template: //html
    `
    <section class="business work-with-us">
        <hr class="my-5">
        <div class="container">
            <h3 class="text-center"> {{ title }} </h3>
            <div class="row justify-content-center mt-4">
                <div v-for="(index, b) in business" class="col-md-3 col-sm-12">
                    <h4 class="p-2 text-center"> {{ b.name }} {{ index++ }} </h4>
                </div>
            </div>
        </div>
        <hr class="my-5">
    </section>
    `,
    data(){
        return {
            title: 'Trabajan con nosotros',
            business: [
                { url: '#', name: 'Business' },
                { url: '#', name: 'Business' },
                { url: '#', name: 'Business' },
                { url: '#', name: 'Business' },
            ]
        }
    }
})