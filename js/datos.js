// js/datos.js

const cuerpos = [
    { 
        nombre: "Policía Nacional", 
        sueldoBase: 1950, 
        requisitos: "Título de Bachillerato, Técnico o equivalente. Tener nacionalidad española, mínimo 18 años, carnet B y compromiso de portar armas.",
        temas: 45,
        teorica: "examen tipo test de 100 preguntas con 3 opciones de respuesta",
        formulaCalculo: "Aciertos - (Errores / 2)", 
        notaCorte2025Real: "una media estimada de 5.40 en la prueba de conocimientos (tras aplicar la fórmula de corrección), aunque el corte real y definitivo para obtener la plaza estuvo en la fase final de Psicotécnicos, situándose en los 6.25 puntos",
        fisicasDetalle: "circuito de agilidad, las dominadas o suspensión en barra y la carrera de resistencia de 1.000 metros",
        detallesNota: "Aunque la teoría se aprueba oficialmente con un 5.00 tras la penalización por respuestas erróneas, en las últimas convocatorias solo acceden al reconocimiento médico y la entrevista los mejores expedientes de la promoción.",
        referenciaOficial: "https://www.policia.es/_es/oposiciones_procesos_selectivos.php" // Web oficial División de Formación
    },
    { 
        nombre: "Guardia Civil", 
        sueldoBase: 1850, 
        requisitos: "Título de Educación Secundaria Obligatoria (ESO) o equivalente. Nacionalidad española, entre 18 y 40 años, y carecer de antecedentes.",
        temas: 24,
        teorica: "examen de conocimientos tipo test de 100 preguntas con 4 opciones de respuesta, test de ortografía, gramática e inglés",
        formulaCalculo: "Puntuación = Aciertos - (Errores / 3) + Baremo de Méritos", 
        notaCorte2025Real: "un corte estimado de 72.45 puntos totalizados para la escala de cabos y guardias en la modalidad de acceso libre",
        fisicasDetalle: "circuito de agilidad, resistencia de 2.000 metros, velocidad de 60 metros y natación de 50 metros estilo libre",
        detallesNota: "En este cuerpo no se califica sobre 10, sino mediante un sumatorio directo de la prueba teórica y el baremo de méritos profesionales o académicos del aspirante.",
        referenciaOficial: "https://www.guardiacivil.es/es/institucional/directorio/escala_cabos_guardias/index.html" // Ingreso oficial GC
    },
    { 
        nombre: "Policía Local", 
        sueldoBase: 1800, 
        requisitos: "Título de Bachillerato o equivalente. Edad mínima de 18 años. Los requisitos de altura dependen del Ayuntamiento convocante.",
        temas: 35,
        teorica: "examen tipo test de conocimientos de la legislación local, desarrollo de temas y resolución de un caso práctico",
        formulaCalculo: "(Examen Teórico / 2) + (Supuesto Práctico / 2)", 
        notaCorte2025Real: "una media estimada de 7.15 puntos en las fases conjuntas de teoría y supuestos",
        fisicasDetalle: "carrera de velocidad (50m), resistencia (1.000m), salto vertical y lanzamiento de balón medicinal",
        detallesNota: "Al depender directamente de las convocatorias de cada Ayuntamiento, las notas sufren variaciones según el volumen de instancias y plazas ofertadas por municipio.",
        referenciaOficial: null // No hay base centralizada estatal para locales
    },
    { 
        nombre: "Mossos d'Esquadra", 
        sueldoBase: 2350, 
        requisitos: "Bachillerato o equivalente. Tener la nacionalidad española y acreditar el conocimiento de lengua catalana nivel C1 o superior.",
        temas: 30,
        teorica: "cuestionario tipo test sobre el temario oficial, test de competencias clave y prueba obligatoria de catalán",
        formulaCalculo: "Aciertos - (Errores / 3)", 
        notaCorte2025Real: "una nota de corte de corte media de 6.12 puntos en el sumatorio de la primera fase selectiva",
        fisicasDetalle: "circuito de agilidad (Navette modificado), presión sobre banco (tren superior) y carrera de resistencia (Course Navette)",
        detallesNota: "La nota final combina la ponderación del bloque de conocimientos con el perfil competencial obligatorio evaluado por el tribunal.",
        referenciaOficial: "https://mossos.gencat.cat/ca/els_mossos_desquadra/oportunitats_de_feina/" // Feina Gencat Mossos
    },
    { 
        nombre: "Ertzaintza", 
        sueldoBase: 2450, 
        requisitos: "Título de Bachillerato o equivalente. Tener la nacionalidad española, más de 18 años y no haber cumplido los 38 años.",
        temas: 40,
        teorica: "prueba de conocimientos tipo test, psicotécnicos de razonamiento y memoria, y examen voluntario de Euskera",
        formulaCalculo: "Nota estandarizada mediante baremo de percentiles (Campana de Gauss)", 
        notaCorte2025Real: "una puntuación de corte estabilizada en los 65.00 puntos netos combinados",
        fisicasDetalle: "carrera de resistencia (Course Navette), circuito de agilidad en suelo y press de banca",
        detallesNota: "El sistema de tipificación vasco ajusta las notas en función del rendimiento general del grupo de opositores que se presenta a la prueba.",
        referenciaOficial: "https://www.arkauti.eus/" // Academia Vasca de Policía y Emergencias (Arkauti)
    },
    { 
        nombre: "Policía Foral", 
        sueldoBase: 2250, 
        requisitos: "Título de Bachillerato, FP de segundo grado o equivalente. Superar el proceso selectivo en la Comunidad Foral de Navarra.",
        temas: 35,
        teorica: "examen tipo test de 100 preguntas teórico-prácticas",
        formulaCalculo: "Aciertos - (Errores / 3)", 
        notaCorte2025Real: "un umbral mínimo de corte fijado en 6.45 puntos netos sobre un máximo de 10",
        fisicasDetalle: "levamiento de yugo o press de banca, salto de longitud parado, carrera de resistencia (1.000m) y natación",
        detallesNota: "El examen específico sobre la legislación foral e historia de Navarra suele actuar como el principal elemento de cribado en la nota de corte.",
        referenciaOficial: "https://www.navarra.es/es/empleo-publico" // Catálogo de empleo público de Navarra
    }
];

const infoProvincias = {
    "Madrid": { plusSueldo: 350, tasa: "15,57€", sede: "Centro de Altos Estudios Policiales (Carabanchel)", gimnasio: "Pistas de Alcorcón y Estadio Vallehermoso", academia: "Academias DEPOL, Jurispol y MasterD Madrid", factorCompetencia: 1.12, boletinLocal: "https://www.bocm.es" },
    "Barcelona": { plusSueldo: 300, tasa: "22,40€", sede: "Complejo Central Egara / Sede Universitaria de Barcelona", gimnasio: "Pistas del CAR de Sant Cugat", academia: "Academia Adams y Ceasfor Barcelona", factorCompetencia: 1.08, boletinLocal: "https://bop.diba.cat" },
    "Valencia": { plusSueldo: 150, tasa: "16,20€", sede: "Complejos policiales de Valencia Capital", gimnasio: "Tramos del Río Turia y pistas de Torrent", academia: "Academia COPO y preparadores locales de Valencia", factorCompetencia: 1.05, boletinLocal: "https://bop.dival.es" },
    "Sevilla": { plusSueldo: 100, tasa: "14,90€", sede: "Facultades asociadas de la Universidad de Sevilla", gimnasio: "Instalaciones Deportivas San Pablo", academia: "Academia UFP Sevilla y Centro de Estudios San Ildefonso", factorCompetencia: 1.07, boletinLocal: "https://www.bopsevilla.es" },
    "Málaga": { plusSueldo: 120, tasa: "15,10€", sede: "Estadio de Atletismo Ciudad de Málaga", gimnasio: "Pistas de Carranque", academia: "Academia Centro Andaluz y Avanza Oposiciones Málaga", factorCompetencia: 1.04, boletinLocal: "https://www.bopmalaga.es" },
    "A Coruña": { plusSueldo: 80, tasa: "18,00€", sede: "Instalaciones homologadas de la Xunta en A Coruña", gimnasio: "Pistas universitarias de Elviña", academia: "Academia Nós e Infopol Galicia", factorCompetencia: 0.98, boletinLocal: "https://bop.dicoruna.es" },
    "Zaragoza": { plusSueldo: 90, tasa: "15,25€", sede: "Sede de la Delegación del Gobierno en Zaragoza", gimnasio: "Pistas de atletismo del CAD", academia: "Academia MasterD Zaragoza y Centro Códice", factorCompetencia: 0.96, boletinLocal: "http://bop.dpz.es" }
};

const provincias = [
    "Álava","Albacete","Alicante","Almería","Asturias","Ávila","Badajoz","Barcelona","Burgos","Cáceres",
    "Cádiz","Cantabria","Castellón","Ciudad Real","Córdoba","Cuenca","Girona","Granada","Guadalajara",
    "Gipuzkoa","Huelva","Huesca","Illes Balears","Jaén","A Coruña","La Rioja","Las Palmas","León",
    "Lleida","Lugo","Madrid","Málaga","Murcia","Navarra","Ourense","Palencia","Pontevedra","Salamanca",
    "Santa Cruz de Tenerife","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia",
    "Valladolid","Bizkaia","Zamora","Zaragoza"
];

const datos = [];
cuerpos.forEach(c => {
    provincias.forEach(p => {
        datos.push({ cuerpo: c.nombre, provincia: p });
    });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { cuerpos, provincias, datos, infoProvincias };
}