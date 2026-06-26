// Menú móvil del header. Usa delegación de eventos sobre document para ser
// robusto frente al render del runtime (dc-runtime) y a cualquier re-render.
(function () {
  function closeMenu(header) {
    header.classList.remove('nav-open');
    var b = document.getElementById('nav-toggle');
    if (b) {
      b.setAttribute('aria-expanded', 'false');
      b.setAttribute('aria-label', 'Abrir menú');
    }
  }

  document.addEventListener('click', function (e) {
    var header = document.getElementById('site-header');
    if (!header) return;
    var t = e.target;
    if (!t || !t.closest) return;

    // Botón hamburguesa: alterna el menú.
    var toggle = t.closest('#nav-toggle');
    if (toggle) {
      e.preventDefault();
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      return;
    }

    if (!header.classList.contains('nav-open')) return;

    // Cerrar al pulsar un enlace del menú o al tocar fuera del header.
    if (t.closest('#nav-main a') || !t.closest('#site-header')) {
      closeMenu(header);
    }
  });

  // Cerrar con la tecla Escape.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var header = document.getElementById('site-header');
    if (header && header.classList.contains('nav-open')) closeMenu(header);
  });
})();
