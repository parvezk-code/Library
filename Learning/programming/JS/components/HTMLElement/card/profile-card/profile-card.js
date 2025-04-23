class ProfileCard extends HTMLElement {
  static get observedAttributes() {
    return ['config'];
  }

  constructor() {
    super();
    this._config = null;
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'config') {
      try {
        this._config = JSON.parse(newValue);
        this.render();
      } catch (e) {
        console.error('Error parsing config:', e);
      }
    }
  }

  render() {
    if (!this._config) {
      this.innerHTML = '<div class="error">Invalid configuration</div>';
      return;
    }

    this.innerHTML = `
      <div class="profile-card">
        <img src="${this._config.image || ''}" alt="${this._config.name || ''}" class="profile-image">
        <div class="profile-info">
          <h3>${this._config.name || ''}</h3>
          <p class="role">${this._config.role || ''}</p>
          <p class="description">${this._config.description || ''}</p>
          <div class="social-links">
            ${this.renderSocialLinks()}
          </div>
        </div>
      </div>
    `;
  }

  renderSocialLinks() {
    if (!this._config.socials) return '';
    
    return Object.entries(this._config.socials)
      .map(([key, value]) => `
        <a href="${value}" target="_blank" class="social-link ${key}">
          <i class="fab fa-${key}"></i>
        </a>
      `).join('');
  }
}

// Check if element is already defined
if (!customElements.get('profile-card')) {
  customElements.define('profile-card', ProfileCard);
}