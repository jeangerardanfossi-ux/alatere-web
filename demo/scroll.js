/* ===========================================================================
   Animation pilotée par le défilement, sans dépendance.
   Trois mécanismes : révélation à l'entrée, comptage des chiffres,
   parallaxe du plan de héros. Tout se dégrade proprement : la classe `js`
   n'est posée qu'ici, donc sans JavaScript la page reste entièrement lisible.
   =========================================================================== */
(() => {
  'use strict';

  const doc = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Éléments à révéler, dans l'ordre où ils doivent apparaître. */
  const REVEAL = [
    '.hero .eyebrow', '.hero h1', '.lede', '.hero__index',
    '.act__head .eyebrow', '.act__head h2',
    '.act__media',
    '.act__intro', '.shops', '.domains', '.tariffs', '.figures', '.badge-line', '.act__note',
    '.clients__head', '.wall',
    '.outro .eyebrow', '.outro h2', '.outro p', '.outro__addr',
  ].join(',');

  const targets = Array.from(document.querySelectorAll(REVEAL));

  /* Cascade : au sein d'une même section, on décale les trois premiers. */
  const seen = new Map();
  targets.forEach((el) => {
    el.setAttribute('data-reveal', '');
    const section = el.closest('section');
    const n = (seen.get(section) || 0);
    if (n > 0 && n < 4) el.setAttribute('data-delay', String(n));
    seen.set(section, n + 1);
  });

  doc.classList.add('js');

  /* ------------------------------------------------------------- comptage ---
     Interpolation amortie vers la valeur cible, puis affichage exact.     */
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function runCount(dt) {
    const target = Number(dt.dataset.count);
    if (!Number.isFinite(target)) return;
    const prefix = dt.dataset.prefix || '';
    const suffix = dt.dataset.suffix || '';
    const plain = dt.hasAttribute('data-plain');
    const render = (v) => {
      const n = plain ? v : v.toLocaleString('fr-FR');
      dt.textContent = prefix + n + suffix;
    };

    if (reduced) { render(target); return; }

    const duration = 1100;
    const start = performance.now();
    render(0);

    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      render(Math.round(easeOut(t) * target));
      if (t < 1) requestAnimationFrame(step);
      else render(target);
    };
    requestAnimationFrame(step);
  }

  /* ---------------------------------------------------------- révélation --- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-in');
      io.unobserve(el);
      el.querySelectorAll('dt[data-count]').forEach(runCount);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  targets.forEach((el) => io.observe(el));

  /* -------------------------------------------------------- visuels ---
     Chaque emplacement tente de charger assets/slot-0N.jpg. Si le fichier
     est là, l'image est insérée et le CSS (:has(img)) efface la grille, la
     mire et la légende. Sinon la plaque technique reste telle quelle.
     Déposer les cinq fichiers suffit donc : rien d'autre à modifier.      */
  document.querySelectorAll('[data-slot]').forEach((plate) => {
    const img = new Image();
    img.alt = '';
    img.decoding = 'async';
    img.addEventListener('load', () => plate.appendChild(img));
    img.addEventListener('error', () => { /* pas encore de visuel : on garde la plaque */ });
    img.src = `assets/slot-${plate.dataset.slot}.jpg`;
  });

  /* ------------------------------------------------- parallaxe et relevé ---
     Un seul rAF partagé, lu depuis le dernier événement de défilement.    */
  const plate = document.querySelector('.hero__plate');
  const hero = document.querySelector('.hero');
  const bar = document.querySelector('.readout__bar i');
  const pct = document.querySelector('.readout__pct');

  let ticking = false;

  function frame() {
    ticking = false;
    const y = window.scrollY;

    if (plate && hero && !reduced) {
      const h = hero.offsetHeight || 1;
      const p = Math.min(1, Math.max(0, y / h));
      /* Le plan recule plus lentement que le texte : 14 % de la hauteur. */
      plate.style.transform = `translate3d(0, ${(p * 14).toFixed(2)}%, 0) scale(${(1 + p * 0.06).toFixed(4)})`;
    }

    if (bar && pct) {
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, y / max) : 0;
      bar.style.height = (ratio * 100).toFixed(1) + '%';
      pct.textContent = String(Math.round(ratio * 100)).padStart(2, '0');
    }
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(frame);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  frame();
})();
