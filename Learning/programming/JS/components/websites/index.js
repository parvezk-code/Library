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
        this.renderTickers();
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
        console.log("json1 ", JSON.stringify(config));
        navBar.setAttribute('config', JSON.stringify(config));
        this.root.appendChild(navBar);
    }

    renderTickers()
    {
        this.ticker = document.createElement('content-ticker');
        this.ticker.setAttribute('config', JSON.stringify(window.siteData?.tickerConfig || {}));
        this.mainContent.appendChild(this.ticker);
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
  