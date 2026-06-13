const contenedor = document.getElementById("resultados");

function render(lista){

    contenedor.innerHTML = "";

    lista.forEach(item => {

        const slug =
            item.cuerpo.toLowerCase().replace(/ /g,"-")
            + "-"
            + item.provincia.toLowerCase().replace(/ /g,"-");

        contenedor.innerHTML += `
            <div class="card">
                <h3>${item.cuerpo}</h3>
                <p>${item.provincia}</p>
                <a href="pages/${slug}.html">Ver requisitos</a>
            </div>
        `;
    });
}

// mostrar todo al inicio
render(datos);

// buscador
document.getElementById("busqueda").addEventListener("input", e => {

    const texto = e.target.value.toLowerCase();

    const filtrado = datos.filter(d =>
        d.cuerpo.toLowerCase().includes(texto) ||
        d.provincia.toLowerCase().includes(texto)
    );

    render(filtrado);
});