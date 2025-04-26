class ContentTicker extends HTMLElement {
    constructor() {
        super();
        this._config = null;
        this._intervalId = null;
        this._isPaused = false;
        this._currentPosition = 0;
        this._itemWidth = 0;
        this._trackWidth = 0;
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

    connectedCallback() {
        this._handleResize();
        window.addEventListener('resize', this._handleResize.bind(this));
    }

    disconnectedCallback() {
        if (this._intervalId) {
            clearInterval(this._intervalId);
        }
        window.removeEventListener('resize', this._handleResize.bind(this));
    }

    _handleResize() {
        if (this._items?.length) {
            this._itemWidth = this._items[0].offsetWidth + 30; // include gap
            this._trackWidth = this._itemWidth * this._items.length;
            this._track.style.width = `${this._trackWidth}px`;
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
        this._handleResize();

        // Pause on hover
        this.querySelector('.ticker-container').addEventListener('mouseenter', () => {
            this._isPaused = true;
        });
        this.querySelector('.ticker-container').addEventListener('mouseleave', () => {
            this._isPaused = false;
        });
    }

    _startTicker() {
        if (!this._track || !this._items?.length) return;

        if (this._intervalId) {
            clearInterval(this._intervalId);
        }

        const interval = this._config.interval || 3000;
        const animationDuration = 500;

        this._intervalId = setInterval(() => {
            if (this._isPaused) return;

            this._currentPosition += this._itemWidth;
            
            // Reset position when we reach the end
            if (this._currentPosition >= this._trackWidth) {
                this._currentPosition = 0;
                this._track.style.transition = 'none';
                this._track.style.transform = `translateX(0)`;
                // Force reflow
                this._track.offsetHeight;
            }

            this._track.style.transition = `transform ${animationDuration}ms ease`;
            this._track.style.transform = `translateX(-${this._currentPosition}px)`;
        }, interval);
    }
}

customElements.define('content-ticker-01', ContentTicker);