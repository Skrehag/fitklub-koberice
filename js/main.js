(function () {
  // Slideshow v hero sekci
  const slides = Array.from(document.querySelectorAll('.hero .slide'));
  const dotsBox = document.querySelector('.dots');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0, timer = null;

  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.className = 'dot' + (i === 0 ? ' is-active' : '');
    b.setAttribute('aria-label', 'Fotka ' + (i + 1));
    b.addEventListener('click', () => { go(i); restart(); });
    dotsBox.appendChild(b);
    return b;
  });

  function go(n) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }
  function start() { if (!reduceMotion) timer = setInterval(() => go(current + 1), 6000); }
  function restart() { clearInterval(timer); start(); }

  document.querySelectorAll('[data-dir]').forEach(btn =>
    btn.addEventListener('click', () => { go(current + Number(btn.dataset.dir)); restart(); })
  );
  const hero = document.querySelector('.hero');
  hero.addEventListener('mouseenter', () => clearInterval(timer));
  hero.addEventListener('mouseleave', restart);
  start();

  // Galerie – posun šipkami
  const strip = document.querySelector('.strip');
  document.querySelectorAll('[data-strip]').forEach(btn =>
    btn.addEventListener('click', () =>
      strip.scrollBy({ left: Number(btn.dataset.strip) * strip.clientWidth * 0.7, behavior: reduceMotion ? 'auto' : 'smooth' })
    )
  );

  // Hlavička: průhledná nad hero, jinak tmavá
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('is-solid', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobilní menu
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
})();
