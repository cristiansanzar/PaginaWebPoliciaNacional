const datos = [];

const cuerpos = [
"Policía Nacional",
"Guardia Civil",
"Policía Local",
"Mossos d'Esquadra",
"Ertzaintza",
"Policía Foral"
];

const provincias = [
"Álava","Albacete","Alicante","Almería","Asturias","Ávila","Badajoz",
"Barcelona","Burgos","Cáceres","Cádiz","Cantabria","Castellón","Ciudad Real",
"Córdoba","Cuenca","Girona","Granada","Guadalajara","Gipuzkoa","Huelva",
"Huesca","Illes Balears","Jaén","A Coruña","La Rioja","Las Palmas","León",
"Lleida","Lugo","Madrid","Málaga","Murcia","Navarra","Ourense","Palencia",
"Pontevedra","Salamanca","Santa Cruz de Tenerife","Segovia","Sevilla",
"Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Bizkaia",
"Zamora","Zaragoza"
];

// generar todas las combinaciones
cuerpos.forEach(c => {
    provincias.forEach(p => {
        datos.push({
            cuerpo: c,
            provincia: p
        });
    });
});