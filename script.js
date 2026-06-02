// ── 1. DESTINOS: hover imagen → aparece texto ──

const destinosItems = document.querySelectorAll('.destinos li');
const menu = document.querySelector("header nav ul");
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
    if (!img) return;

    var overlay = document.createElement('div');
    overlay.classList.add('destino-overlay');
    overlay.textContent = textos[index] || "Uno de los destinos más emblemáticos de Japón.";
    
    item.style.position = 'relative';
    item.insertBefore(overlay, img);

    img.addEventListener('mouseenter', function() {
        img.style.opacity = '0';
        overlay.classList.add('destino-overlay-visible');
    });

    overlay.addEventListener('mouseleave', function() {
        img.style.opacity = '1';
        overlay.classList.remove('destino-overlay-visible');
    });
});


// ── 2. DEFINICION: hover → muestra el significado ──

const defH3 = document.querySelector('.definicion h3');
const defP = document.querySelector('.definicion p');

if (defH3 && defP) {
    defP.style.display = 'none';

    defH3.addEventListener('mouseenter', function() {
        defP.style.display = 'block';
    });

    defH3.addEventListener('mouseleave', function() {
        defP.style.display = 'none';
    });
}
