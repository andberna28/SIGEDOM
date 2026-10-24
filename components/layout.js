function carregarHead(){
    const tituloPagina = document.title || "Página";

    const headContent = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${tituloPagina}</title>
        <link rel="stylesheet" href="../css/style.css">
        <script src="../components/script.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
    `;

    document.head.insertAdjacentHTML('beforeend', headContent);
}


function carregarNavbar(){
    const navbar = document.getElementById("navbar");
    if(!navbar) return;

    const paginaAtual = window.location.pathname.split("/").pop();

    navbar.innerHTML = `
        <nav class="navbar">
            <a href="calendario.html" class="logo">
                <img src="../assets/img/Logo Grupo Cultural.png">
            </a>
            <div class="nav-links">
                <a href="../pages/sobre.html" class="${paginaAtual === 'sobre.html' ? 'active' : ''}">
                    <img class="icon" src="../assets/icons/Sobre.svg">
                    <span>Sobre</span>
                </a>
                <a href="../pages/calendario.html" class="${paginaAtual === 'calendario.html' ? 'active' : ''}">
                    <img class="icon" src="../assets/icons/Calendario.svg">
                    <span>Calendário</span>
                </a>
                <a href="../pages/galeria.html" class="${paginaAtual === 'galeria.html' ? 'active' : ''}">
                    <img class="icon" src="../assets/icons/Galeria.svg">
                    <span>Galeria</span>
                </a>
                <a href="../pages/doacoes.html" class="${paginaAtual.startsWith('doacoes') ? 'active' : ''}">
                    <img class="icon coracao" src="../assets/icons/Doacao.svg">
                    <span>Doações</span>
                </a>
            </div>
            <div class="user-container">
                <img class="profile" src="../assets/icons/Avatar generico.svg">
                <div class="user-info">
                    <span>Meu perfil</span>
                    <img class="seta-icon" src="../assets/icons/Seta-bandeja-perfil.svg">
                </div>
            </div>
        </nav>
    `;
}



document.addEventListener("DOMContentLoaded", () => {
    carregarHead();
    carregarNavbar();
    // carregarRodape();
});