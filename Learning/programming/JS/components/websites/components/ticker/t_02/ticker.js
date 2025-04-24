class ContentTicker02 extends HTMLElement {
    constructor() {
        super();
        this._items = [];
        this._currentIndex = 0;
        this._gap = 10;
        this._controls = true;
    }

    static get observedAttributes() {
        return ['config'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'config') {
            try {
                const config = newValue ? JSON.parse(newValue) : {};
                this._items = Array.isArray(config.items) ? config.items : [];
                this._gap = typeof config.gap === 'number' ? Math.min(config.gap, 15) : 10;
                this._controls = typeof config.controls === 'boolean' ? config.controls : true;
                this._render();
            } catch (e) {
                console.error('Error parsing ticker config:', e);
                this._items = [];
            }
        }
    }

    connectedCallback() {
        if (this._items.length > 0) {
            this._render();
        }
    }

    _render() {
        if (!Array.isArray(this._items) || this._items.length === 0) return;

        this.innerHTML = `
            <div class="ticker-02-container">
                <div class="ticker-02-track" style="transform: translateX(0)">
                    ${this._items.map(item => `
                        <div class="ticker-02-item">
                            ${item.image ? `<img class="ticker-02-image" src="${item.image}" alt="${item.title || ''}">` : ''}
                            ${item.title ? `<h3 class="ticker-02-title">${item.title}</h3>` : ''}
                            ${item.description ? `<p class="ticker-02-description">${item.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
                ${this._controls ? `
                    <button class="ticker-02-control ticker-02-prev">❮</button>
                    <button class="ticker-02-control ticker-02-next">❯</button>
                ` : ''}
            </div>
        `;

        this._track = this.querySelector('.ticker-02-track');
        this._itemsElements = this.querySelectorAll('.ticker-02-item');
        
        // Set initial positions
        this._updateItemPositions();
        
        if (this._controls) {
            this.querySelector('.ticker-02-prev').addEventListener('click', () => this._move(-1));
            this.querySelector('.ticker-02-next').addEventListener('click', () => this._move(1));
        }
    }

    _updateItemPositions() {
        if (!this._track || !this._itemsElements) return;
        
        // Use pure item width without any gap for movement calculations
        const itemWidth = this._itemsElements[0]?.offsetWidth || 0;
        
        this._itemsElements.forEach((item, index) => {
            // Position calculation ignores gaps for movement
            const position = (index - this._currentIndex) * itemWidth;
            
            item.style.transform = `translateX(${position}px)`;
            item.style.transition = 'transform 0.5s ease';
        });
        
        // Visual gaps are maintained via CSS gap property
        this._track.style.gap = `${this._gap}px`;
    }

    _move(direction) {
        if (!this._items.length) return;
        
        this._currentIndex += direction;
        
        // Handle wrapping
        if (this._currentIndex < 0) {
            this._currentIndex = this._items.length - 1;
        } else if (this._currentIndex >= this._items.length) {
            this._currentIndex = 0;
        }
        
        this._updateItemPositions();
    }
}

customElements.define('content-ticker-02', ContentTicker02);