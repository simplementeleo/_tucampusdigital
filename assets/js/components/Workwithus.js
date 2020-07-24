Vue.component('Workwithus',{
    template: //html
    `
    <section class="business work-with-us">
        <hr class="my-5">
        <div class="container">
            <h3 class="text-center"> {{ title }} </h3>
            <div class="row justify-content-center mt-4">
                <div v-for="(b, index) in business" class="col-md-3 col-sm-12">
                    <h4 class="p-2 text-center"> {{ b.name }} {{ index+1 }} </h4>
                </div>
            </div>
        </div>
        <hr class="my-5">
    </section>
    `,
    data(){
        return {
            title: 'Work with us',
            business: [
                { url: '#', name: 'Business' },
                { url: '#', name: 'Business' },
                { url: '#', name: 'Business' },
                { url: '#', name: 'Business' },
            ]
        }
    }
})