/* ============================================================
   ДОПОЛНИТЕЛЬНЫЕ АНИМАЦИИ
   ============================================================ */
(function () {
    'use strict';

    // Параллакс для hero-карточек
    document.addEventListener('DOMContentLoaded', () => {
        const heroCards = document.querySelectorAll('.floating-card');
        if (!heroCards.length) return;

        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        function animateParallax() {
            heroCards.forEach((card, i) => {
                const factor = (i + 1) * 8;
                card.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
            });
            requestAnimationFrame(animateParallax);
        }
        if (!window.matchMedia('(max-width: 968px)').matches) {
            animateParallax();
        }
    });

    // Плавное появление секций
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.05 });
    sections.forEach(s => observer.observe(s));

    // Изменение цвета логотипа при скролле
    window.addEventListener('scroll', () => {
        const logo = document.querySelector('.logo-hanzi');
        if (!logo) return;
        const scrolled = window.scrollY;
        const hue = (scrolled / 10) % 60;
        logo.style.filter = `hue-rotate(${hue}deg)`;
    });

    // Пульсация частиц при клике
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--accent);
            pointer-events: none;
            z-index: 99999;
            transform: translate(-50%, -50%);
            opacity: 0.8;
            transition: all 0.6s ease;
        `;
        document.body.appendChild(ripple);
        requestAnimationFrame(() => {
            ripple.style.width = '80px';
            ripple.style.height = '80px';
            ripple.style.opacity = '0';
        });
        setTimeout(() => ripple.remove(), 700);
    });
})();