class Controller 
{
    constructor(rootId = 'app') 
    {
        this.root = document.getElementById(rootId);
        if (!this.root) throw new Error(`Element with ID '${rootId}' not found.`);
        this.mainContent = document.createElement('div');
        this.mainContent.className = 'main-content';
    }
  
    init() 
    {
        //this.renderNavBar_01();
        this.renderNavBar_02();
        this.root.appendChild(this.mainContent);
        this.renderTickers_01();
        this.renderTickers_04();
        this.renderTickers_03();
        this.renderTickers_05();
        this.renderCarousel_06();
        this.renderCategoryList();
        this.renderFooter();
    }
  
    renderNavBar_01() 
    {
        const navBar = document.createElement('nav-bar-01');
        const config = window.siteData?.navBarConfig?.config01 || {};
        navBar.setAttribute('config', JSON.stringify(config));
        this.root.appendChild(navBar);
    }

    renderNavBar_02() 
    {
        const navBar = document.createElement('nav-bar-02');
        const config = window.siteData?.navBarConfig?.config02 || {};
        navBar.setAttribute('config', JSON.stringify(config));
        this.root.appendChild(navBar);
    }

    renderTickers_01()
    {
        const ticker = document.createElement('content-ticker-01');
        ticker.setAttribute('config', JSON.stringify(window.siteData?.tickerConfig?.config01 || {}));
        this.mainContent.appendChild(ticker);
    }

    renderTickers_04() {
        const scroller = document.createElement('card-scroller-04');
        const config = window.siteData?.tickerConfig?.config02 || {};
        scroller.setAttribute('config', JSON.stringify(config));
        this.mainContent.appendChild(scroller);
    }

    renderTickers_05() {
        const scroller = document.createElement('image-carousel05');
        const config = window.siteData?.tickerConfig?.config03 || {};
        scroller.setAttribute('config', JSON.stringify(config));
        this.mainContent.appendChild(scroller);
        // new FlickityCarousel04(scroller);
    }

    renderCarousel_06() {
        const scroller = document.createElement('image-carousel-06');
      
        /*
        const images = [
          { src: 'https://bootstrapmade.com/content/demo/Arsha/assets/img/person/person-m-7.webp', alt: 'Image 1' },
          { src: 'https://bootstrapmade.com/content/demo/Arsha/assets/img/person/person-m-6.webp', alt: 'Image 2' },
          { src: 'https://bootstrapmade.com/content/demo/Arsha/assets/img/person/person-m-9.webp', alt: 'Image 3' },
          { src: 'https://bootstrapmade.com/content/demo/Arsha/assets/img/person/person-m-12.webp', alt: 'Image 4' },
          { src: 'https://bootstrapmade.com/content/demo/Arsha/assets/img/person/person-f-8.webp', alt: 'Image 5' },
          { src: 'https://bootstrapmade.com/content/demo/Arsha/assets/img/person/person-f-4.webp', alt: 'Image 6' }
        ];
        */

        const images = window.siteData?.tickerConfig?.config04.images;
      
        images.forEach(({ src, alt }) => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = alt;
          scroller.appendChild(img);
        });
      
        this.mainContent.appendChild(scroller);
      }
      
    

    renderTickers_03() {
        const scroller = document.createElement('image-scroller-03');
        const config = window.siteData?.tickerConfig?.config03 || {};
        scroller.setAttribute('config', JSON.stringify(config));
        this.mainContent.appendChild(scroller);
    }
    
    
    
    renderCategoryList() 
    {
        const categoryList = document.createElement('category-list');
        categoryList.setAttribute('config', JSON.stringify(window.siteData?.categoryConfig || {}));
        this.mainContent.appendChild(categoryList);
    }
  
    renderFooter() 
    {
        const footer = document.createElement('site-footer');
        const config = window.siteData?.footerConfig || {};
        footer.setAttribute('config', JSON.stringify(config));
        this.root.appendChild(footer);
    }
}

const controller = new Controller('app');
// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', () => controller.init());
  