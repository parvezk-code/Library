class ContentTicker02 extends HTMLElement {
    constructor() {
        super();
        this._config = null;
        this._intervalId = null;
        this._isPaused = false;
        this._currentPosition = 0;
        this._itemWidth = 0;
        this._trackWidth = 0;
        this._rafId = null;
        this._lastTimestamp = 0;
        this._direction = -1;
    }

    static get observedAttributes() {
        return ['config', 'direction', 'speed'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'config') {
            this._config = JSON.parse(newValue);
            this._render();
            this._startTicker();
        } else if (name === 'direction') {
            this._direction = newValue === 'right' ? 1 : -1;
        } else if (name === 'speed') {
            if (this._config) {
                this._config.speed = parseFloat(newValue) || 1;
            }
        }
    }

    connectedCallback() {
        this._handleResize();
        window.addEventListener('resize', this._debouncedResize);
        this.addEventListener('touchstart', this._handleTouchStart);
        this.addEventListener('touchmove', this._handleTouchMove);
        this.addEventListener('touchend', this._handleTouchEnd);
    }

    disconnectedCallback() {
        this._stopAnimation();
        window.removeEventListener('resize', this._debouncedResize);
        this.removeEventListener('touchstart', this._handleTouchStart);
        this.removeEventListener('touchmove', this._handleTouchMove);
        this.removeEventListener('touchend', this._handleTouchEnd);
    }

    _debouncedResize = () => {
        cancelAnimationFrame(this._rafId);
        this._rafId = requestAnimationFrame(() => this._handleResize());
    };

    _handleResize() {
        if (this._items?.length) {
            const firstItem = this._items[0];
            this._itemWidth = firstItem.offsetWidth + 
                            parseInt(window.getComputedStyle(firstItem).marginRight) + 
                            parseInt(window.getComputedStyle(firstItem).marginLeft);
            this._trackWidth = this._itemWidth * this._items.length;
            this._track.style.width = `${this._trackWidth}px`;
        }
    }

    _render() {
        if (!this._config) return;

        this.innerHTML = `
            <div class="ticker-02-container" part="container">
                <div class="ticker-02-track" part="track">
                    ${this._config.items.map((item, index) => `
                        <div class="ticker-02-item" part="item" data-index="${index}">
                            ${item.image ? `<img src="${item.image}" alt="${item.title}" class="ticker-02-image" part="image">` : ''}
                            <h3 part="title">${item.title}</h3>
                            ${item.count ? `<span part="count">${item.count}</span>` : ''}
                            ${item.description ? `<p part="description">${item.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
                ${this._config.controls ? `
                    <button class="ticker-02-control prev" part="control prev" aria-label="Previous">
                        <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
                    </button>
                    <button class="ticker-02-control next" part="control next" aria-label="Next">
                        <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                    </button>
                ` : ''}
            </div>
        `;

        this._track = this.querySelector('.ticker-02-track');
        this._items = this.querySelectorAll('.ticker-02-item');
        this._handleResize();

        const container = this.querySelector('.ticker-02-container');
        container.addEventListener('mouseenter', () => this._isPaused = true);
        container.addEventListener('mouseleave', () => this._isPaused = false);
        
        if (this._config.controls) {
            this.querySelector('.ticker-02-control.prev').addEventListener('click', () => this._step(1));
            this.querySelector('.ticker-02-control.next').addEventListener('click', () => this._step(-1));
        }

        this._items.forEach(item => {
            item.addEventListener('click', () => {
                const index = item.dataset.index;
                this.dispatchEvent(new CustomEvent('item-click', {
                    detail: { index, item: this._config.items[index] },
                    bubbles: true
                }));
            });
        });
    }

    _startTicker() {
        this._stopAnimation();
        const baseSpeed = this._config.speed || 1;
        const pixelsPerSecond = 60 * baseSpeed;
        
        const animate = (timestamp) => {
            if (!this._lastTimestamp) this._lastTimestamp = timestamp;
            const delta = timestamp - this._lastTimestamp;
            this._lastTimestamp = timestamp;
            
            if (!this._isPaused) {
                const deltaPixels = (pixelsPerSecond * delta) / 1000;
                this._currentPosition += deltaPixels * this._direction;
                
                if (this._currentPosition >= this._trackWidth) {
                    this._currentPosition = 0;
                } else if (this._currentPosition <= -this._itemWidth) {
                    this._currentPosition = this._trackWidth - this._itemWidth;
                }
                
                this._track.style.transform = `translateX(${-this._currentPosition}px)`;
            }
            
            this._rafId = requestAnimationFrame(animate);
        };
        
        this._rafId = requestAnimationFrame(animate);
    }

    _stopAnimation() {
        if (this._intervalId) clearInterval(this._intervalId);
        if (this._rafId) cancelAnimationFrame(this._rafId);
        this._intervalId = null;
        this._rafId = null;
    }

    _step(direction) {
        this._currentPosition += this._itemWidth * direction;
        if (this._currentPosition >= this._trackWidth) {
            this._currentPosition = 0;
        } else if (this._currentPosition <= -this._itemWidth) {
            this._currentPosition = this._trackWidth - this._itemWidth;
        }
        this._track.style.transition = 'transform 0.5s ease';
        this._track.style.transform = `translateX(${-this._currentPosition}px)`;
    }

    _touchStartX = 0;
    _handleTouchStart = (e) => {
        this._touchStartX = e.touches[0].clientX;
        this._isPaused = true;
    };

    _handleTouchMove = (e) => {
        if (!this._touchStartX) return;
        const x = e.touches[0].clientX;
        const walk = x - this._touchStartX;
        this._track.style.transition = 'none';
        this._track.style.transform = `translateX(${-this._currentPosition + walk}px)`;
    };

    _handleTouchEnd = (e) => {
        if (!this._touchStartX) return;
        const x = e.changedTouches[0].clientX;
        const walk = x - this._touchStartX;
        if (Math.abs(walk) > 50) {
            this._step(walk > 0 ? 1 : -1);
        } else {
            this._track.style.transition = 'transform 0.3s ease';
            this._track.style.transform = `translateX(${-this._currentPosition}px)`;
        }
        this._touchStartX = 0;
        this._isPaused = false;
    };
}

customElements.define('content-ticker-02', ContentTicker02);

/*

<content-ticker config='{
        "items": [
            {"title": "Item 1", "count": "100"},
            {"title": "Item 2", "count": "200"}
        ],
        "speed": 1.5
    }'>
</content-ticker>


<content-ticker config='{
    "items": [
        {"title": "Product 1", "image": "product1.jpg", "description": "Description here"},
        {"title": "Product 2", "image": "product2.jpg", "description": "Description here"}
    ],
    "controls": true
    }' 
    direction="right">
</content-ticker>


*/