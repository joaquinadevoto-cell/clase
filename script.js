// ── 1. DESTINOS: hover imagen → aparece texto ──

const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector("nav ul");

hamburguesa.addEventListener("click", () => {
    menu.classList.toggle("abierto");
    hamburguesa.classList.toggle("activo");
});
const destinosItems = document.querySelectorAll('.destinos li');

const textos = [
    "Hiroshima alberga el Parque Memorial de la Paz, un símbolo mundial de memoria y esperanza.",
    "El cruce de Shibuya es uno de los más transitados del mundo: cruzan hasta 3000 personas por ciclo.",
    "La Torre Tsutenkaku es el símbolo histórico de Osaka, construida en 1912.",
    "El templo Kiyomizu-dera fue construido sin usar un solo clavo.",
    "Dotonbori es el corazón de la vida nocturna y gastronómica de Osaka.",
    "El jardín Koraku-en es uno de los tres jardines más bellos del Japón tradicional."
];

destinosItems.forEach(function(item, index) {
    var img = item.querySelector('img');

    var overlay = document.createElement('div');
    overlay.classList.add('destino-overlay');
    overlay.textContent = textos[index] || "Uno de los destinos más emblemáticos de Japón.";
    item.appendChild(overlay);
    item.style.position = 'relative';

    item.addEventListener('mouseenter', function() {
        img.classList.add('destino-img-hidden');
        overlay.classList.add('destino-overlay-visible');
    });

    item.addEventListener('mouseleave', function() {
        img.classList.remove('destino-img-hidden');
        overlay.classList.remove('destino-overlay-visible');
    });
});


// ── 2. DEFINICION: hover → muestra el significado ──

const defH3 = document.querySelector('.definicion h3');

if (defH3) {
    const textoOriginal = defH3.innerHTML;
    const textoSignificado = '<span style="font-weight:400; font-size: 1.4rem;">La luz del sol que se filtra entre las hojas de los árboles — ese instante de belleza efímera que solo existe en movimiento.</span>';

    defH3.addEventListener('mouseenter', function() {
        defH3.innerHTML = textoSignificado;
    });

    defH3.addEventListener('mouseleave', function() {
        defH3.innerHTML = textoOriginal;
    });
}


// ── 3. ZOOM SUAVE en imágenes generales ──

const todasLasImagenes = document.querySelectorAll('img');

todasLasImagenes.forEach(function(img) {
    img.classList.add('img-zoom');
});
