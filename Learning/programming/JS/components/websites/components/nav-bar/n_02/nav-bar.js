class NavBar_02 extends HTMLElement {
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
            <div class="nb-navbar">
                <div class="nb-logo">${this._config.logo}</div>
                <nav class="nb-nav-links">
                    ${this._config.links.map(link => 
                        `<a href="${link.url}">${link.text}</a>`
                    ).join('')}
                    ${this._config.button ? `<a href="${this._config.button.url}" class="nb-get-started">${this._config.button.text}</a>` : ''}
                </nav>
                <button class="nb-menu-button">☰</button>
            </div>
        `;
        
        // Add mobile menu toggle - updated to use nb-show
        this.querySelector('.nb-menu-button').addEventListener('click', () => {
            this.querySelector('.nb-nav-links').classList.toggle('nb-show');
        });
    }
}

customElements.define('nav-bar-02', NavBar_02);