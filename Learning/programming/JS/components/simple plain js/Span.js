
class Span
{
    constructor(id, className, innerHTML)
    {
        this.span   =   document.createElement('span');

        this.span.setAttribute('id', id);
        this.span.classList.add(className);
        this.span.innerHTML = innerHTML;
    }

    function hide()
    {
        this.span.style.display = "none";
    }

    function show(type)
    {
        // type = block, inline etc..
        this.span.style.display = type;
    }

    function appendChild(childElement)
    {
        this.span.appendChild(childElement);
    }
}
