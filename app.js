const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Obtener texto
    const searchTerm = form.elements.query.value;

    // Configurar búsqueda
    const config = { params: { q: searchTerm } }

    // Pedir datos
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

    // Mostrar imágenes
    makeImages(res.data);

    // Limpiar input
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}