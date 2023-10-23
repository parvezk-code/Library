
class H1
{
    constructor(id, className, innerHTML)
    {
        this.h1     =   document.createElement('h1');

        this.h1.setAttribute('id', id);
        this.h1.classList.add(className);
        this.h1.innerHTML = innerHTML;
    }

    hide()
    {
        this.h1.style.display = "none";
    }

    show(type)
    {
        // type = block, inline etc..
        this.h1.style.display = type;
    }

    appendChild(childElement)
    {
        this.h1.appendChild(childElement);
    }
}
