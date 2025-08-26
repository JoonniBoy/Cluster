// js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerBtn.addEventListener('click', () => {
        // Toggle (añade/quita) la clase 'hidden' en el menú móvil para mostrarlo/ocultarlo
        mobileMenu.classList.toggle('hidden');
        // Toggle la clase 'active' en el botón para la animación a 'X'
        hamburgerBtn.classList.toggle('active');
    });
});
