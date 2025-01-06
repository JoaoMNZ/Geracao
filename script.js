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

function initTooltip() {
    const divImg = document.querySelector('[data-tooltip]');
    divImg.addEventListener('mouseover', onMouseOver);
    function onMouseOver() {
        const divCriada = criarDiv();
        this.addEventListener('mousemove', handleMouseMove);

        function handleMouseMove(event) {
            divCriada.style.top = event.pageY + 20 + 'px';
            divCriada.style.left = event.pageX + 20 + 'px';
        }

        this.addEventListener('mouseleave', onMouseLeave);

        function onMouseLeave() {
            divCriada.remove();
            divImg.removeEventListener('mouseleave', onMouseLeave);
            divImg.removeEventListener('mousemove', handleMouseMove);
        }
    }

    function criarDiv() {
        const divCriada = document.createElement('div');
        divCriada.classList.add('tooltip');
        divCriada.innerText = divImg.ariaLabel;
        document.body.appendChild(divCriada);
        return divCriada;
    }
}
initTooltip();