// footer.js
class SiteFooter extends HTMLElement {
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
            <footer class="footer">
                <div class="footer-content">
                    <div class="copyright">${this._config.copyright}</div>
                    <div class="footer-links">
                        ${this._config.links.map(link => 
                            `<a href="${link.url}">${link.text}</a>`
                        ).join('')}
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);