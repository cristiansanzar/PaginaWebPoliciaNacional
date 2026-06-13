const fs = require("fs");
const path = require("path");

const { cuerpos, provincias } = require("../js/datos");

const template = fs.readFileSync("../template/page.html", "utf8");

const output = "../pages";

if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
}

// SEO extra por provincia
const extras = {
"Madrid": "Zona con máxima competencia y muchas plazas.",
"Barcelona": "Alta exigencia en pruebas y gran demanda.",
"Valencia": "Convocatorias frecuentes cada año.",
"Sevilla": "Buena relación entre plazas y opositores.",
"Málaga": "Alta demanda de agentes en los últimos años.",
"A Coruña": "Oposiciones estables y con buena oferta."
};

function slug(text){
    return text
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g,"-");
}

cuerpos.forEach(c => {

    provincias.forEach(p => {

        const extra = extras[p] || "Convocatorias habituales en esta provincia.";

        const title = `Requisitos ${c.nombre} en ${p} 2026`;

        const description = `Guía completa de ${c.nombre} en ${p}. Sueldo ${c.sueldo} y requisitos actualizados.`;

        const html = template
            .replace(/{{TITLE}}/g, title)
            .replace(/{{DESCRIPTION}}/g, description)
            .replace(/{{CUERPO}}/g, c.nombre)
            .replace(/{{PROVINCIA}}/g, p)
            .replace(/{{REQUISITOS}}/g, c.requisitos)
            .replace(/{{SUELDO}}/g, c.sueldo)
            .replace(/{{EXTRA}}/g, extra)
            .replace(/{{INTRO}}/g, `Información oficial de ${c.nombre} en ${p}.`);

        const fileName = `${slug(c.nombre)}-${slug(p)}.html`;

        fs.writeFileSync(path.join(output, fileName), html);

        console.log("Creado:", fileName);
    });

});

console.log("✔ TODAS LAS PÁGINAS GENERADAS");