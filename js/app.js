// js/app.js
const contenedor = document.getElementById("resultados");
const inputBusqueda = document.getElementById("busqueda");

function generarSlug(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

function render(lista) {
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `<div class="no-results">❌ No hay convocatorias que coincidan con tu criterio de búsqueda.</div>`;
        return;
    }

    lista.forEach(item => {
        const nombreArchivo = `${generarSlug(item.cuerpo)}-${generarSlug(item.provincia)}.html`;

        contenedor.innerHTML += `
            <div class="card">
                <div class="card-badge">Actualizado 2026</div>
                <h3>${item.cuerpo}</h3>
                <p class="provincia-tag">📍 Provincia: ${item.provincia}</p>
                <a href="pages/${nombreArchivo}" class="card-link">Ver requisitos y sueldo →</a>
            </div>
        `;
    });
}

render(datos);

inputBusqueda.addEventListener("input", e => {
    const textoUsuario = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

    if (!textoUsuario) {
        render(datos);
        return;
    }

    const terminos = textoUsuario.split(/\s+/);

    const filtrado = datos.filter(item => {
        const textoTarget = `${item.cuerpo} ${item.provincia}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return terminos.every(termino => textoTarget.includes(termino));
    });

    render(filtrado);
});