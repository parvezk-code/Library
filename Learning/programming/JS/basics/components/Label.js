
class Label
{
    constructor(id, className, innerHTML)
    {
        this.label  =   document.createElement('label');

        this.label.setAttribute('id', id);
        this.label.classList.add(className);
        this.label.innerHTML = innerHTML;
    }

    function hide()
    {
        this.label.style.display = "none";
    }

    function show(type)
    {
        // type = block, inline etc..
        this.label.style.display = type;
    }

    function appendChild(childElement)
    {
        this.label.appendChild(childElement);
    }
}
