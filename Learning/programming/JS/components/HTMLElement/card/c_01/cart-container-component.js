class MyCartContainerComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    static get observedAttributes() {
      return ['config'];
    }
  
    // Called when the component is added to the DOM
    connectedCallback() {
      this.render();
    }
  
    // Called when the 'config' attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'config' && newValue !== oldValue) {
        this.render();
      }
    }
  
    // Parse JSON from config attribute and render carts
    render() {
      const config = JSON.parse(this.getAttribute('config') || '[]');
  
      // Clear previous content
      this.innerHTML = '';
  
      // Create container div
      const container = document.createElement('div');
      container.classList.add('cart-container');
  
      // Loop through each cart and create team-card elements
      config.forEach(cart => {
        const teamCard = document.createElement('team-card');
        teamCard.setAttribute('config', JSON.stringify(cart)); // Passing the cart as config to team-card
  
        container.appendChild(teamCard);
      });
  
      // Append the cart container to the main DOM
      this.appendChild(container);
    }
  }
  
  // Register the custom element
  customElements.define('cart-container', MyCartContainerComponent);
  