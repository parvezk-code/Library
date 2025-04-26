class ImageCarousel06 extends HTMLElement {
  connectedCallback() {
    const images = Array.from(this.querySelectorAll('img'));
    if (!images.length) {
      console.warn('No images found in <image-carousel-06>');
      return;
    }

    this.classList.add('carousel-wrapper-06');

    const carousel = document.createElement('div');
    carousel.classList.add('carousel-06');

    images.forEach(img => {
      const cell = document.createElement('div');
      cell.classList.add('carousel-cell-06');
      cell.appendChild(img);
      carousel.appendChild(cell);
    });

    this.innerHTML = '';
    this.appendChild(carousel);

    setTimeout(() => {
      new Flickity(carousel, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 3000,
        pauseAutoPlayOnHover: true,
        imagesLoaded: true,
        pageDots: true,
        prevNextButtons: true
      });
    }, 50);
  }
}

customElements.define('image-carousel-06', ImageCarousel06);
