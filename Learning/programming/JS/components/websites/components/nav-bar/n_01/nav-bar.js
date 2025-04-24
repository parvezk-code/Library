// nav-bar.js
class NavBar extends HTMLElement {
    constructor() {
        super();
        this._config = null;
    }

    static get observedAttributes() {
        return ['config'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'config') {
            this._config = JSON.parse(newValue);
            this._render();
        }
    }

    _render() {
        if (!this._config) return;
        
        this.innerHTML = `
            <header class="navbar">
                <div class="logo">${this._config.logo}</div>
                <nav class="nav-links">
                    ${this._config.links.map(link => 
                        `<a href="${link.url}">${link.text}</a>`
                    ).join('')}
                </nav>
                <button class="menu-button">☰</button>
            </header>
        `;
        
        // Add mobile menu toggle
        this.querySelector('.menu-button').addEventListener('click', () => {
            this.querySelector('.nav-links').classList.toggle('show');
        });
    }
}

customElements.define('nav-bar', NavBar);