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
        this.renderNavBar_01();
        this.renderVerticalSpace();
        this.renderNavBar_02();
    }
    
    renderVerticalSpace()
    {
        const space = new VerticalSpace();
        space.setAttribute('height', '10vh');
        this.root.appendChild(space);
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
}

const controller = new Controller('app');
// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', () => controller.init());
  