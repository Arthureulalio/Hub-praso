const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        accordion.classList.toggle('active');
        const body = accordion.querySelector('.accordion-body');
        if (accordion.classList.contains('active')) {
            body.style.display = 'block';
        } else {
            body.style.display = 'none';
        }
    });
});