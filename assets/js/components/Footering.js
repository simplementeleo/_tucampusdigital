Vue.component('Footering', {
    template: //html 
    `
    <footer class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-12 d-flex flex-column">
                    <a href="#" target="_blank">{{ l++ }}</a>
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
                    { url: '#', nameLink: 'Link'  },
                    { url: '#', nameLink: 'Link'  },
                    { url: '#', nameLink: 'Link'  },
                    { url: '#', nameLink: 'Link'  },
                    { url: '#', nameLink: 'Link'  },
                ],
                [
                    { url: '#', nameLink: 'Link'  },
                    { url: '#', nameLink: 'Link'  },
                    { url: '#', nameLink: 'Link'  },
                    { url: '#', nameLink: 'Link'  },
                ],
                [
                    { url: '#', nameLink: 'Facebook'  },
                    { url: '#', nameLink: 'Instagram'  },
                    { url: '#', nameLink: 'Twitter'  },
                    { url: '#', nameLink: 'Linkedin'  },
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