
class Button
{
    constructor(id, onclick, className, innerText)
    {
        this.button     =   document.createElement('button');

        this.button.setAttribute('id', id);
        this.button.addEventListener("click", onclick, false);
        this.button.classList.add(className);
        this.button.innerText  =   innerText;
    }

    disable()
    {
        this.button.disabled = true;
    }

}
