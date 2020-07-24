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

            <div v-for="category in categories">
                <ul class="nav nav-tabs" id="tabs" role="tablist">
                    <li class="nav-item">
                        <a :class="['nav-link',  { 'active': category.tabs.nav.active }]" :id="category.tabs.nav.id" data-toggle="tab" :href="category.tabs.nav.href" role="tab"
                            :aria-controls="category.tabs.nav.ariaControls" aria-selected="true">{{ category.tabs.nav.name }}</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane active" :id="category.tabs.tabContent.id" role="tabpanel" :aria-labelledby="category.tabs.tabContent.ariaLabelledby">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="video m-2">
                                        <div class="play">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="p-2 text-white">
                                        <h5>{{ category.tabs.tabContent.video.title }}</h5>
                                        <p class="my-2"> {{ category.tabs.tabContent.video.instructor }} </p>

                                        <div class="d-flex">
                                            <h5 class="pr-3"> {{ category.tabs.tabContent.video.offer }}$ </h5>
                                            <span class="text-light before"> {{ category.tabs.tabContent.video.beforePrice }}$ </span>
                                        </div>
                                        <div v-if="category.tabs.tabContent.video.bestSeller" class="alert alert-warning">
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
        </div>

    </section>
    `,
    data() {
        return {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate illo maxime fugit consequuntur distinctio in?',
            categories: [{
                    tabs: {
                        nav: {
                            name: 'Marketing',
                            active: true,
                            id: 'marketing-tab',
                            href: '#marketing',
                            ariaControls: 'marketing'
                        },
                        tabContent: {
                            id: 'marketing',
                            ariaLabelledby: 'marketing-tab',
                            video: {
                                title: 'Web Development - Premiun course',
                                instructor: 'Joe Frigman',
                                offer: '11,99',
                                beforePrice: '14,99',
                                bestSeller: true
                            }
                        }
                    }
                },
                {
                    tabs: {
                        nav: {
                            name: 'Development',
                            active: false,
                            id: 'development-tab',
                            href: '#development',
                            ariaControls: 'development'
                        },
                        tabContent: {
                            id: 'development',
                            ariaLabelledby: 'development-tab',
                            video: {
                                title: 'Web Development - Premiun course',
                                instructor: 'Joe Hello',
                                offer: '11,99',
                                beforePrice: '14,99',
                                bestSeller: false
                            }
                        }
                    }
                },
            ]
        }
    }
})