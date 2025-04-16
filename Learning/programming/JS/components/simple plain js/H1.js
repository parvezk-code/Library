
class H1
{
    constructor(id, className, innerHTML)
    {
        this.h1     =   document.createElement('h1');

        this.h1.setAttribute('id', id);
        this.h1.classList.add(className);
        this.h1.innerHTML = innerHTML;
    }

    function hide()
    {
        this.h1.style.display = "none";
    }

    function show(type)
    {
        // type = block, inline etc..
        this.h1.style.display = type;
    }

    function appendChild(childElement)
    {
        this.h1.appendChild(childElement);
    }
}
