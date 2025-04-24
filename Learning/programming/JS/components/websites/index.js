class Controller 
{
    constructor(rootId = 'app') 
    {
        this.root = document.getElementById(rootId);
        if (!this.root) throw new Error(`Element with ID '${rootId}' not found.`);
        this.mainContent = document.createElement('div');
        this.mainContent.className = 'main-content';
        this.root.appendChild(this.mainContent);
    }
  
    init() 
    {
        this.renderNavBar();
        this.renderTickers();
        this.renderCategoryList();
        this.renderFooter();
    }
  
    renderNavBar() 
    {
        const navBar = document.createElement('nav-bar');
        const config = window.siteData?.navBarConfig || {};
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
  