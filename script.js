function smoothScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    if (linksInternos.length) {
        linksInternos.forEach((item) => item.addEventListener('click', scrollToSection));
        function scrollToSection(event) {
            event.preventDefault();
            const href = document.querySelector(this.getAttribute('href'));
            href.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }
}
smoothScroll();

function initAnimationScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                if ((section.getBoundingClientRect().top - window.innerHeight * 0.55) < 0) {
                    section.classList.add("ativo");
                }
            })
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
initAnimationScroll();
