class Controller 
{
    constructor(rootId = 'app') 
    {
        this.root = document.getElementById(rootId);
        if (!this.root) throw new Error(`Element with ID '${rootId}' not found.`);
    }
  
    init() 
    {
        this.renderTickers_01();
        this.renderVerticalSpace('5vh');
        this.renderTickers_04();
        this.renderVerticalSpace('5vh');
        this.renderTickers_03();
        this.renderVerticalSpace('5vh');
        this.renderTickers_05();
        this.renderVerticalSpace('5vh');
        this.renderCarousel_06();
    }
    
    renderVerticalSpace(size)
    {
        const space = new VerticalSpace();
        space.setAttribute('height', `${size}`);
        this.root.appendChild(space);
    }
  
    renderTickers_01()
    {
        const ticker = document.createElement('content-ticker-01');
        ticker.setAttribute('config', JSON.stringify(window.siteData?.tickerConfig?.config01 || {}));
        this.root.appendChild(ticker);
    }

    renderTickers_03() {
        const scroller = document.createElement('image-scroller-03');
        const config = window.siteData?.tickerConfig?.config03 || {};
        scroller.setAttribute('config', JSON.stringify(config));
        this.root.appendChild(scroller);
    }
    
    renderTickers_04() {
        const scroller = document.createElement('card-scroller-04');
        const config = window.siteData?.tickerConfig?.config02 || {};
        scroller.setAttribute('config', JSON.stringify(config));
        this.root.appendChild(scroller);
    }

    renderTickers_05() {
        const scroller = document.createElement('image-carousel05');
        const config = window.siteData?.tickerConfig?.config03 || {};
        scroller.setAttribute('config', JSON.stringify(config));
        this.root.appendChild(scroller);
        // new FlickityCarousel04(scroller);
    }

    renderCarousel_06() {
        const scroller = document.createElement('image-carousel-06');

        const images = window.siteData?.tickerConfig?.config04.images;
      
        images.forEach(({ src, alt }) => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = alt;
          scroller.appendChild(img);
        });
      
        this.root.appendChild(scroller);
      }
}

const controller = new Controller('app');
// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', () => controller.init());
  