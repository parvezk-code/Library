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
        this.renderVerticalSpace();
        this.renderFooter();
    }

    renderVerticalSpace()
    {
        const space = new VerticalSpace();
        space.setAttribute('height', '10vh');
        this.root.appendChild(space);
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
  