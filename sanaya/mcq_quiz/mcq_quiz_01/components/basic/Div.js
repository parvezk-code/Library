
class Div
{
    constructor(id, className, innerHTML)
    {
        this.div    =   document.createElement('div');

        this.div.setAttribute('id', id);
        this.div.classList.add(className);
        this.div.innerHTML = innerHTML;
    }

    hide()
    {
        this.div.style.display = "none";
    }

    show(type)
    {
        // type = block, inline etc..
        this.div.style.display = type;
    }

    appendChild(childElement)
    {
        this.div.appendChild(childElement);
    }
}
