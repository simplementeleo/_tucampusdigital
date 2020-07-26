Vue.component('Test', {
    template: //html
        `
    <div class="container">
        <div class="d-flex">

           <!-- <button v-for="(name, tab) in categories[0]" @click="tabActive(tab)"  :class="['btn', 'mr-2', tab === isActive ? 'btn-primary' : 'btn-outline-primary' ]">
                {{ name.name }} {{ tab }}
            </button>-->


            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-for="(name, tab) in categories[0]" @click="tabActive(tab)" class="swiper-slide bg-primary p-0">
                        {{ name.name }}
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>

        </div>
        <div class="content">

            <div v-for="(content, tab) in categories[1]" v-if="tab === isActive">
                {{ content.content }} {{ tab }}
            </div>
        
        </div>
    </div>
    `,
    data() {
        return {
            isActive: 0,
            categories: [
                [
                    { name: 'Marketing' },
                    { name: 'Web Development' },
                    { name: 'Design' }
                ],
                [
                    { content: 'Content ' },
                    { content: 'Content ' },
                    { content: 'Content ' },
                ]
            ]
        }
    },
    methods: {
        tabActive(tab){
            this.isActive = tab
        }
    }




/*

Usar el v-if || v-show para la aparición del tab por el ID que será parámetro de una función de 'isActive(n)'

<div
        class="tabBlock-pane"
        :class="{ 'show-content': active_tab === 1 }"
        v-show="active_tab === 1"
        key="1"
      >

*/ 





})