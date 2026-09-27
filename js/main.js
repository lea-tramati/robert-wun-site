/* ── Scroll header ───────────────────────────────────────── */
const header = document.querySelector('header');
const hero   = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const threshold = hero
        ? hero.offsetHeight - header.offsetHeight
        : 0;
    header.classList.toggle('scrolled', window.scrollY > threshold);
}, { passive: true });


/* ── Burger menu ─────────────────────────────────────────── */
const burger   = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        const isOpen = burger.classList.toggle('open');
        navLinks.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            burger.classList.remove('open');
            navLinks.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}




/* ── Reveal on scroll ────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));




/* ── Press feature carousel — cycles through the article visuals ── */
document.querySelectorAll('.press-feature-carousel').forEach(carousel => {
    const slides = carousel.querySelectorAll('.press-feature-carousel__img');
    if (slides.length < 2) return;

    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('is-active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('is-active');
    }, 3000);
});
