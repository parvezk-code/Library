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
        //this.renderTickers_01();
        this.renderTickers_02();
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

    renderTickers_02() {
        const ticker = document.createElement('content-ticker-02');
        ticker.setAttribute('config', JSON.stringify(window.siteData?.tickerConfig?.config02 || {}));
        this.mainContent.appendChild(ticker);
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
  