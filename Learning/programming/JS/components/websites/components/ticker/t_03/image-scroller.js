class ImageScroller03 extends HTMLElement {
    static get observedAttributes() {
      return ['config'];
    }
  
    constructor() {
      super();
      this.currentIndex = 0;
      this.images = [];
      this.imageWidth = 0;
      this.gap = 10;
    }
  
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
  
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'config' && oldVal !== newVal) {
        this.render();
        this.setupListeners();
      }
    }
  
    setupListeners() {
      const leftBtn = this.querySelector('.ticker-03-prev');
      const rightBtn = this.querySelector('.ticker-03-next');
      this.container = this.querySelector('.image-container-03');
      this.images = this.querySelectorAll('img');
      
      if (this.images.length > 0) {
        const firstImage = this.images[0];
        const style = window.getComputedStyle(firstImage);
        this.imageWidth = firstImage.offsetWidth + 
                        parseInt(style.marginRight) + 
                        parseInt(window.getComputedStyle(this.container).gap || 0);
      }
  
      if (leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => this.scroll(-1));
        rightBtn.addEventListener('click', () => this.scroll(1));
      }
    }
  
    scroll(direction) {
      if (!this.images.length) return;
  
      this.currentIndex += direction;
      this.currentIndex = Math.max(0, Math.min(this.currentIndex, this.images.length - 1));
      this.scrollToCurrentImage();
    }
  
    scrollToCurrentImage() {
      if (!this.container) return;
      
      const scrollPosition = this.currentIndex * this.imageWidth;
      this.container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  
    render() {
      const raw = this.getAttribute('config') || '{}';
      let config = JSON.parse(raw);
      const images = Array.isArray(config) ? config : config.images || [];
  
      this.innerHTML = `
        <div class="scroller-wrapper-03">
          <button class="ticker-03-control ticker-03-prev">❮</button>
          <div class="image-container-03">
            ${images.map(src => `
              <img src="${src}" alt="image" />
            `).join('')}
          </div>
          <button class="ticker-03-control ticker-03-next">❯</button>
        </div>
      `;
    }
}
  
customElements.define('image-scroller-03', ImageScroller03);