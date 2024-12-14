// Función para obtener los personajes de la API
function getCharacters(done) {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => done(data.results));
}

// Función para obtener las ubicaciones de la API
function getLocations(done) {
    fetch("https://rickandmortyapi.com/api/location")
        .then(response => response.json())
        .then(data => done(data.results));
}

// Función para obtener los episodios de la API
function getEpisodes(done) {
    fetch("https://rickandmortyapi.com/api/episode")
        .then(response => response.json())
        .then(data => done(data.results));
}

// Mostrar personajes
getCharacters(personajes => {
    personajes.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <p class="card-text">Estado: ${personaje.status}</p>
                    </div>
                </div>
            </div>
        `);
        document.querySelector("#personajes-list").append(article);
    });
});

// Mostrar ubicaciones
getLocations(ubicaciones => {
    ubicaciones.forEach(ubicacion => {
        const article = document.createRange().createContextualFragment(`
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${ubicacion.name}</h5>
                        <p class="card-text">Tipo: ${ubicacion.type}</p>
                        <p class="card-text">Dimensión: ${ubicacion.dimension}</p>
                    </div>
                </div>
            </div>
        `);
        document.querySelector("#ubicaciones-list").append(article);
    });
});

// Mostrar episodios
getEpisodes(episodios => {
    episodios.forEach(episodio => {
        const article = document.createRange().createContextualFragment(`
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${episodio.name}</h5>
                        <p class="card-text">Fecha de emisión: ${episodio.air_date}</p>
                        <p class="card-text">Código: ${episodio.episode}</p>
                    </div>
                </div>
            </div>
        `);
        document.querySelector("#episodios-list").append(article);
    });
});
