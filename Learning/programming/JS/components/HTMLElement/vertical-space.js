class VerticalSpace extends HTMLElement {
    static get observedAttributes() {
      return ['height'];
    }
  
    constructor() {
      super();
      this.style.display = 'block';
      this.updateHeight();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'height' && oldValue !== newValue) {
        this.updateHeight();
      }
    }
  
    connectedCallback() {
      window.addEventListener('resize', this.updateHeight.bind(this));
    }
  
    disconnectedCallback() {
      window.removeEventListener('resize', this.updateHeight.bind(this));
    }
  
    updateHeight() {
      const height = this.getAttribute('height') || '5vh'; // Default is 5% of viewport height
      this.style.height = height;
    }
  }
  
  customElements.define('vertical-space', VerticalSpace);
  