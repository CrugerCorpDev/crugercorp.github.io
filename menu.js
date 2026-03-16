document.addEventListener("DOMContentLoaded", () => {
    // Detectamos en qué página estamos para pintar el botón de azul
    const path = window.location.pathname;
    
    const isActive = (pageName) => {
        // Si es el index, validamos la raíz
        if (pageName === 'index.html' && (path.endsWith('/') || path.endsWith('index.html'))) {
            return 'style="color: #00A8E8; font-weight: bold;"';
        }
        // Para las demás páginas
        if (path.includes(pageName)) {
            return 'style="color: #00A8E8; font-weight: bold;"';
        }
        return '';
    };

    // Aquí guardamos TODO el código de tu barra superior y tu menú lateral
    const menuHTML = `
        <header>
            <nav class="nav-links">
                <a href="filosofia.html" ${isActive('filosofia.html')}>Filosofía</a>
                <a href="bitacora.html" ${isActive('bitacora.html')}>Noticias</a>
                <a href="contacto.html" ${isActive('contacto.html')}>Agenda y Contacto</a>
            </nav>
            <button class="menu-btn" onclick="toggleMenu()">☰</button>
        </header>

        <div class="sidebar-overlay" onclick="toggleMenu()"></div>
        <div class="sidebar">
            <button class="close-btn" onclick="toggleMenu()">×</button>
            <div class="sidebar-title">MENÚ</div>
            <a href="index.html" ${isActive('index.html')}>► Inicio</a>
            <a href="darkzone.html" ${isActive('darkzone.html')}>Dark Zone</a>
            <a href="seguridad.html" ${isActive('seguridad.html')}>Certificados de Confianza</a>
            <a href="corporativo.html" ${isActive('corporativo.html')}>Información Corporativa</a>
            <a href="fundador.html" ${isActive('fundador.html')}>El Fundador</a>
            <a href="freeware.html" ${isActive('freeware.html')}>Software Freeware</a>
            <a href="america_latina.html" ${isActive('america_latina.html')}>América Latina</a>
            <a href="contacto.html" ${isActive('contacto.html')}>Agenda y Contacto</a>
            <a href="privacidad.html" ${isActive('privacidad.html')}>Aviso de Privacidad</a>
        </div>
    `;

    // Inyectamos todo este código justo al principio de la página
    document.body.insertAdjacentHTML("afterbegin", menuHTML);
});

// Movemos la función del botón de menú aquí para que viva en un solo lugar
window.toggleMenu = function() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.sidebar-overlay').classList.toggle('active');
};
