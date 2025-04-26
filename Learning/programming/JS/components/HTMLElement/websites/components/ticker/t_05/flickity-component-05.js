class ImageCarousel05 extends HTMLElement {
    constructor() {
      super();
      this.carousel = null;
    }
  
    static get observedAttributes() {
      return ['config'];
    }
  
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'config' && oldVal !== newVal) {
        this.render();
      }
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const config = JSON.parse(this.getAttribute('config') || '{}');
      const images = config.images || [];
  
      this.innerHTML = `
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
        <div class="carousel-container05">
          <div class="carousel05 js-carousel05">
            ${images.map(src => `
              <div class="carousel-cell05">
                <img src="${src}" alt="carousel image">
              </div>`).join('')}
          </div>
        </div>
      `;
  
      // Delay initialization to ensure DOM elements are available
      setTimeout(() => {
        if (this.carousel) {
          this.carousel.destroy();
        }
        this.carousel = new Flickity(this.querySelector('.js-carousel05'), {
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          autoPlay: 3000,
          pauseAutoPlayOnHover: true
        });
      });
    }
  }
  
  customElements.define('image-carousel05', ImageCarousel05);
  