
class Span
{
    constructor(id, className, innerHTML)
    {
        this.span   =   document.createElement('span');

        this.span.setAttribute('id', id);
        this.span.classList.add(className);
        this.span.innerHTML = innerHTML;
    }

    hide()
    {
        this.span.style.display = "none";
    }

    show(type)
    {
        // type = block, inline etc..
        this.span.style.display = type;
    }

    appendChild(childElement)
    {
        this.span.appendChild(childElement);
    }
}

var teacher = {
    name : "ABC",
    age : 18,
    dept : "CSE",
    score : 90
};

