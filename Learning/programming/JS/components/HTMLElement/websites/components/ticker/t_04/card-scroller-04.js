class CardScroller04 extends HTMLElement {
  static get observedAttributes() {
    return ['config'];
  }

  constructor() {
    super();
    this.currentIndex = 0;
    this.cards = [];
    this.cardWidth = 0;
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
    const leftBtn = this.querySelector('.ticker-04-prev');
    const rightBtn = this.querySelector('.ticker-04-next');
    this.container = this.querySelector('.card-container-04');
    this.cards = this.querySelectorAll('.card-04');

    if (this.cards.length > 0) {
      const firstCard = this.cards[0];
      const style = window.getComputedStyle(firstCard);
      this.cardWidth = firstCard.offsetWidth +
        parseInt(style.marginRight) +
        parseInt(window.getComputedStyle(this.container).gap || 0);
    }

    if (leftBtn && rightBtn) {
      // leftBtn.addEventListener('click', () => this.scroll(-1));
      leftBtn.addEventListener('click', () => this.scrollLeft());
      // rightBtn.addEventListener('click', () => this.scroll(1));
      rightBtn.addEventListener('click', () => this.scrollRight());
    }
  }

  scrollLeft() {
    if (!this.cards.length || !this.container) return;
  
    this.currentIndex = Math.max(0, this.currentIndex - 1);
    this.scrollToCurrentCard();
  }
  
  scrollRight() {
    if (!this.cards.length || !this.container) return;
  
    const visibleWidth = this.container.offsetWidth;
    const totalCardWidth = this.cardWidth * this.cards.length;
    const maxIndex = Math.floor((totalCardWidth - visibleWidth) / this.cardWidth);
  
    this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
    this.scrollToCurrentCard();
  }
  
  scroll(direction) {
    if (!this.cards.length) return;

    this.currentIndex += direction;
    this.currentIndex = Math.max(0, Math.min(this.currentIndex, this.cards.length - 1));
    this.scrollToCurrentCard();
  }

  scrollToCurrentCard() {
    if (!this.container) return;

    const scrollPosition = this.currentIndex * this.cardWidth;
    this.container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  render() {
    const raw = this.getAttribute('config') || '{}';
    let config = JSON.parse(raw);
    const items = config.items || [];

    this.innerHTML = `
      <div class="scroller-wrapper-04">
        ${config.controls ? `<button class="ticker-04-control ticker-04-prev">❮</button>` : ''}
        <div class="card-container-04" style="gap: ${config.gap || 10}px;">
          ${items.map(item => `
            <div class="card-04">
              <img src="${item.image}" alt="${item.title}" class="card-image-04" />
              <div class="card-content-04">
                <h3 class="card-title-04">${item.title}</h3>
                <p class="card-desc-04">${item.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
        ${config.controls ? `<button class="ticker-04-control ticker-04-next">❯</button>` : ''}
      </div>
    `;
  }
}

customElements.define('card-scroller-04', CardScroller04);
