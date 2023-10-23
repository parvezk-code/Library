
class Label
{
    constructor(id, className, innerHTML)
    {
        this.label  =   document.createElement('label');

        this.label.setAttribute('id', id);
        this.label.classList.add(className);
        this.label.innerHTML = innerHTML;
    }

    hide()
    {
        this.label.style.display = "none";
    }

    show(type)
    {
        // type = block, inline etc..
        this.label.style.display = type;
    }

    appendChild(childElement)
    {
        this.label.appendChild(childElement);
    }
}
