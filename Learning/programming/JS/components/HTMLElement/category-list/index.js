class Controller 
{
    constructor(rootId = 'app') 
    {
        this.root = document.getElementById(rootId);
        if (!this.root) throw new Error(`Element with ID '${rootId}' not found.`);
    }
  
  
    init() 
    {
        this.renderVerticalSpace();
        this.renderCategoryList();
    }

    renderVerticalSpace()
    {
        const space = new VerticalSpace();
        space.setAttribute('height', '10vh');
        this.root.appendChild(space);
    }

    renderCategoryList() 
    {
        const categoryList = document.createElement('category-list');
        categoryList.setAttribute('config', JSON.stringify(window.siteData?.categoryConfig || {}));
        this.root.appendChild(categoryList);
    }
  
}

const controller = new Controller('app');
// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', () => controller.init());
  