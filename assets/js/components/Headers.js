Vue.component('Headers', {
    template: //html
    `
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav mr-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="#">Categorías</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Enseña con nosotros</a>
                    </li>

                </ul>

                <form class="my-2 my-lg-0 mr-lg-4">
                    <input class="form-control mr-sm-2 rounded-pill px-4" type="search"
                        placeholder="Busca cualquier cosa" aria-label="Search">
                </form>
                <button href="#" class="btn btn-outline-primary mr-2">
                    Inicia sesión
                </button>
                <button href="#" class="btn btn-primary">
                    Regístrate
                </button>
            </div>
        </nav>

        <article>

            <div class="container mt-3 py-5">
                <div class="card p-5">
                    <h2>{{ titleCard }}</h2>
                    <p class="mt-3">{{ textCard }}</p>
                    <input class="form-control mt-3" type="search" placeholder="¿Qué quieres aprender?">
                </div>
            </div>

        </article>


    </header>
    `,
    data(){
        return {
            titleCard: 'Lorem, ipsum dolor.',
            textCard: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusamus suscipit ullam, repellendus architecto reiciendis inventore aut velit. Praesentium accusantium voluptate provident iure, dolores maxime. Iusto eos porro repellendus sint!',
        }
    }
})