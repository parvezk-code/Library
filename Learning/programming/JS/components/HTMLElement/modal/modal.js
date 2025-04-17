class CustomModal extends HTMLElement {
    static get observedAttributes() {
        return ['open', 'config', 'content'];
    }

    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
            this._toggleModal();
        } else if ((name === 'config' || name === 'content') && oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const config = this.getConfig();
        const content = this.getContent();

        this.innerHTML = `
            <div class="modal-container">
                <div class="modal-header">
                    <h3 class="modal-title">${config.title || 'Modal Title'}</h3>
                    ${config.showClose !== false ? '<button class="close-button">&times;</button>' : ''}
                </div>
                <div class="modal-body"></div>
            </div>
        `;

        // Handle content insertion
        const body = this.querySelector('.modal-body');
        if (content) {
            body.innerHTML = '';
            body.appendChild(content);
        } else {
            body.innerHTML = '<p>No content provided</p>';
        }
    }

    getConfig() {
        try {
            const configAttr = this.getAttribute('config');
            return configAttr ? JSON.parse(configAttr) : {};
        } catch (e) {
            console.error('Invalid config JSON', e);
            return {};
        }
    }

    getContent() {
        const contentSelector = this.getAttribute('content');
        if (!contentSelector) return null;

        const contentElement = document.querySelector(contentSelector);
        if (contentElement) {
            // Clone the node and show it (in case original is hidden)
            const clone = contentElement.cloneNode(true);
            clone.style.display = 'block';
            return clone;
        }
        return null;
    }

    _toggleModal() {
        const isOpen = this.hasAttribute('open');
        
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', this._handleKeyDown);
        } else {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', this._handleKeyDown);
        }
    }

    _handleClick(event) {
        const closeButton = event.target.closest('.close-button');
        if (closeButton || event.target === this) {
            this.removeAttribute('open');
            this.dispatchEvent(new CustomEvent('modal-closed', { bubbles: true }));
        }
    }

    _handleKeyDown(event) {
        if (event.key === 'Escape' && this.hasAttribute('open')) {
            this.removeAttribute('open');
            this.dispatchEvent(new CustomEvent('modal-closed', { bubbles: true }));
        }
    }

    setupEventListeners() {
        this.addEventListener('click', this._handleClick);
    }

    removeEventListeners() {
        this.removeEventListener('click', this._handleClick);
        document.removeEventListener('keydown', this._handleKeyDown);
    }
}

customElements.define('custom-modal', CustomModal);

/*


<custom-modal 
    config='{"title": "My Modal", "showClose": true}'
    content="#myContent">
</custom-modal>


const modal = document.getElementById('exampleModal');
modal.setAttribute('config', JSON.stringify({title: "New Title"}));
modal.setAttribute('content', "#newContent");
modal.setAttribute('open', ''); // Show modal




*/