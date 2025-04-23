
class TeamCard extends HTMLElement {
  static get observedAttributes() {
    return ['config'];
  }

  constructor() {
    super();
    this.config = {};
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'config' && newVal) {
      try {
        this.config = JSON.parse(newVal);
        this.render();
      } catch (e) {
        console.error("Invalid JSON config:", e);
      }
    }
  }

  connectedCallback() {
    if (this.getAttribute('config')) {
      try {
        this.config = JSON.parse(this.getAttribute('config'));
        this.render();
      } catch (e) {
        console.error("Invalid config:", e);
      }
    }
  }

  render() {
    this.innerHTML = `<div class='team-card'>
      <img src="${this.config.image || 'https://via.placeholder.com/150'}" alt="">
      <h3>${this.config.name || this.config.title || this.config.course || 'No Title'}</h3>
      <p>${this.config.role || this.config.position || this.config.designation || this.config.author || ''}</p>
    </div>`;
  }
}

customElements.define('team-card', TeamCard);
