Vue.component('Categories', {
    template: //html
        `
        <section class="categories-video mb-5">
            <div class="container">

                <div class="row">
                    <div class="col-md-7 col-sm-12">
                        <h4> {{ title }} </h4>
                        <p class="my-4"> {{ text }} </p>
                    </div>
                </div>

                <div class="d-flex">
                    <div v-for="(name, tab) in categories[0]" @click="tabActive(tab)"  :class="['p-0', { 'isActive': tab === isActive }]">
                        <p class="tab-title text-center p-3"> {{ name.name }} </p>
                    </div>
                </div>

                <div class="content">

                    <div v-for="(content, tab) in categories[1]" v-if="tab === isActive">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div v-for="video in content[tab]" class="swiper-slide">
                                    <a href="#" target="_blank">
                                        <div class="video m-2">
                                            <div class="play">
                                                <span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="content p-2 text-white">
                                        <h5> {{ video }} {{ tab }}</h5>
                                        <p class="my-2"> {{  }} </p>
            
                                        <div class="d-flex">
                                            <h5 class="pr-3"> {{  }} $</h5>
                                            <span class="before"> {{  }} $</span>
                                        </div>
                                        <div v-if="mostSold" class="alert alert-warning">
                                            Lo más vendido
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                
                </div>
            






            </div>
        </section>
    `,
    data(){
        return {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate illo maxime fugit consequuntur distinctio in?',
            isActive: 0,
            categories: [
                [
                    { name: 'Marketing' },
                    { name: 'Web Development' },
                    { name: 'Design' },
                    { name: 'DevOPS' }
                ],
                [
                    [
                        { url: '#' },
                        { title: 'Title Video' },
                        { instructor: 'Title Video' },
                        { offer: 'Title Video' },
                        { beforePrice: 'Title Video' },
                        { mostSold: false }

                    ]
                        
                    
                ]
            ]
        }
    },
    methods: {
        tabActive(tab){
            this.isActive = tab
            console.log(tab)
        }
    }
})