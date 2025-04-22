class TeamCard extends HTMLElement {
    static get observedAttributes() {
      return ['config'];
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'config' && oldValue !== newValue) {
        this.render();
      }
    }
  
    render() {
      const configAttr = this.getAttribute('config');
      if (!configAttr) {
        this.innerHTML = `<p style="color: red;">Missing config attribute.</p>`;
        return;
      }
  
      let data;
      try {
        data = JSON.parse(configAttr);
      } catch (e) {
        console.error('Invalid JSON in config attribute', e);
        this.innerHTML = `<p style="color: red;">Invalid config JSON.</p>`;
        return;
      }
  
      this.innerHTML = `
        <div class="team-card">
          <img src="${data.img}" alt="${data.name}">
          <div class="info">
            <h3>${data.name}</h3>
            <p class="role">${data.role}</p>
            <p class="desc">${data.description}</p>
            <div class="socials">
              ${data.socials?.twitter ? `<a href="${data.socials.twitter}" target="_blank" aria-label="Twitter">X</a>` : ''}
              ${data.socials?.facebook ? `<a href="${data.socials.facebook}" target="_blank" aria-label="Facebook">F</a>` : ''}
              ${data.socials?.instagram ? `<a href="${data.socials.instagram}" target="_blank" aria-label="Instagram">I</a>` : ''}
              ${data.socials?.linkedin ? `<a href="${data.socials.linkedin}" target="_blank" aria-label="LinkedIn">in</a>` : ''}
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('team-card', TeamCard);
  