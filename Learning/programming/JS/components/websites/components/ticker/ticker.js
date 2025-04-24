class ContentTicker extends HTMLElement {
    constructor() {
        super();
        this._config = null;
        this._intervalId = null;
    }

    static get observedAttributes() {
        return ['config'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'config') {
            this._config = JSON.parse(newValue);
            this._render();
            this._startTicker();
        }
    }

    disconnectedCallback() {
        if (this._intervalId) {
            clearInterval(this._intervalId);
        }
    }

    _render() {
        if (!this._config) return;

        this.innerHTML = `
            <div class="ticker-container">
                <div class="ticker-track">
                    ${this._config.items.map(item => `
                        <div class="ticker-item">
                            <h3>${item.title}</h3>
                            <span>${item.count}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        this._track = this.querySelector('.ticker-track');
        this._items = this.querySelectorAll('.ticker-item');
    }

    _startTicker() {
        if (!this._track || !this._items?.length) return;

        if (this._intervalId) {
            clearInterval(this._intervalId);
        }

        const itemWidth = this._items[0].offsetWidth;
        const interval = this._config.interval || 1000;

        this._intervalId = setInterval(() => {
            this._track.style.transition = 'transform 0.5s ease';
            this._track.style.transform = `translateX(-${itemWidth}px)`;

            // After the transition ends, reset position and move item
            setTimeout(() => {
                this._track.style.transition = 'none';
                const first = this._track.children[0];
                this._track.appendChild(first);
                this._track.style.transform = 'translateX(0)';
            }, 500); // match transition duration
        }, interval);
    }
}

customElements.define('content-ticker', ContentTicker);
