Vue.component('Footering', {
    template: //html 
    `
    <footer class="py-5">
        <div class="container">
            <div class="row">
                <div v-for="(i, j) in 3" class="col-md-3 col-sm-12 d-flex flex-column">
                    <div v-for="(foo, index) in footer[j]" class="my-2">
                        <a :href="foo.url" target="_blank"> {{ foo.name }} </a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-12 d-flex flex-column">
                    <select class="custom-select">
                        <option selected>Lang</option>
                        <option v-for="option in options" :value="option.value"> {{ option.name }} </option>
                    </select>
                </div>
                <div class="mt-4 col-sm-12">
                    <p class="text-center">&copy; {{ title }} </p>
                </div>
            </div>
        </div>
    </footer>
    `,
    data(){
        return {
            title: 'Tucampusdigital',
            footer: [
                [
                    { url: '#', name: 'Link'  },
                    { url: '#', name: 'Link'  },
                    { url: '#', name: 'Link'  },
                    { url: '#', name: 'Link'  },
                    { url: '#', name: 'Link'  },
                ],
                [
                    { url: '#', name: 'Link'  },
                    { url: '#', name: 'Link'  },
                    { url: '#', name: 'Link'  },
                    { url: '#', name: 'Link'  },
                ],
                [
                    { url: '#', name: 'Facebook'  },
                    { url: '#', name: 'Instagram'  },
                    { url: '#', name: 'Twitter'  },
                    { url: '#', name: 'Linkedin'  },
                ],
            ],
            options: [
                { value: '', name: 'Spanish' },
                { value: '', name: 'English' },
                { value: '', name: 'Italian' },
            ]
        }
    }
})