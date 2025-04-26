// category-list.js
class CategoryList extends HTMLElement {
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
            <div class="category-list">
                ${this._config.categories.map(category => `
                    <div class="category-item">
                        <h3>${category.name}</h3>
                        <span>${category.count} Products</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

customElements.define('category-list', CategoryList);