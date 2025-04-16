
class Div
{
    constructor(id, className, innerHTML)
    {
        this.div    =   document.createElement('div');

        this.div.setAttribute('id', id);
        this.div.classList.add(className);
        this.div.innerHTML = innerHTML;
    }

    function hide()
    {
        this.div.style.display = "none";
    }

    function show(type)
    {
        // type = block, inline etc..
        this.div.style.display = type;
    }

    function appendChild(childElement)
    {
        this.div.appendChild(childElement);
    }
}
