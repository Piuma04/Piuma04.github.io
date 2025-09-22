const css = `
    @keyframes rainbow {
        0%   { background-color: #ff0000; }
        14%  { background-color: #ff8c00; }
        28%  { background-color: #ffd700; }
        42%  { background-color: #00ff00; }
        57%  { background-color: #00bfff; }
        71%  { background-color: #0000ff; }
        85%  { background-color: #8b00ff; }
        100% { background-color: #ff0000; }
    }

    .rainbow-bg {
        animation: rainbow 3s linear infinite;
        display: inline-block;
        color: #ffffff; /* texto blanco para contraste */
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 1rem;
        margin: 0.5rem;
    }

    /* Respetar preferencia de usuarios que evitan movimiento */
    @media (prefers-reduced-motion: reduce) {
        .rainbow-bg { animation: none !important; }
    }
`;

class RomanComp extends HTMLElement {
    constructor() {
        super();

        // Estilos con keyframes dentro del shadow
        const style = document.createElement('style');
        style.textContent = css;
        shadow.appendChild(style);

        // Contenedor que usa la clase con la animación (fondo)
        const wrapper = document.createElement('div');
        wrapper.className = 'rainbow-bg';

        // Usamos <slot> para permitir contenido personalizado
        wrapper.innerHTML = `<slot>Cats 2019</slot>`;
        shadow.appendChild(wrapper);
    }
}

customElements.define("surprise", RomanComp);