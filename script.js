document.addEventListener('DOMContentLoaded', function() {

  // ── 1. MENÚ HAMBURGUESA ──

  const btnMenu   = document.querySelector('.btn-menu');
  const navMobile = document.querySelector('header nav');
  const headerEl  = document.querySelector('header');

  if (btnMenu && navMobile) {

    btnMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      const abierto = navMobile.classList.toggle('nav-abierta');
      btnMenu.setAttribute('aria-expanded', abierto);
      document.body.classList.toggle('menu-abierto', abierto);
    });

    navMobile.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navMobile.classList.remove('nav-abierta');
        btnMenu.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-abierto');
      });
    });

    document.addEventListener('click', function(e) {
      if (headerEl && !headerEl.contains(e.target)) {
        navMobile.classList.remove('nav-abierta');
        btnMenu.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-abierto');
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        navMobile.classList.remove('nav-abierta');
        btnMenu.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-abierto');
      }
    });
  }


  // ── 2. HEADER — sombra al hacer scroll ──

  if (headerEl) {
    window.addEventListener('scroll', function() {
      headerEl.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }


  // ── 3. SCROLL REVEAL ──

  const selectores = [
    '.destinos li',
    '.practicas-tradicionales li',
    '.festividades-destacadas li',
    '.tarjetas > ul > li',
    '.obras li',
    '.platos-tipicos li',
    '.postres li',
    '.bebidas li',
    '.iconos li',
    '.intro-fotos img'
  ];

  const revealEls = document.querySelectorAll(selectores.join(', '));

  if (revealEls.length > 0) {
    revealEls.forEach(function(el) {
      el.classList.add('reveal');
    });

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function(el) {
      observer.observe(el);
    });
  }


  // ── 4. HOVER CARDS ──

  document.querySelectorAll(
    '.destinos li, .tarjetas > ul > li, .obras li'
  ).forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', function() {
      card.classList.remove('hovered');
    });
  });



  // ── 6. DEFINICION — hover → muestra el significado ──

  const defH3 = document.querySelector('.definicion h3');
  const defP  = document.querySelector('.definicion p');

  if (defH3 && defP) {
    defP.style.display = 'none';

    defH3.addEventListener('mouseenter', function() {
      defP.style.display = 'block';
    });

    defH3.addEventListener('mouseleave', function() {
      defP.style.display = 'none';
    });
  }


  // ── 7. ZOOM SUAVE en imágenes ──

  document.querySelectorAll('img').forEach(function(img) {
    img.classList.add('img-zoom');
  });

});
