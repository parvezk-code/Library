
class RadioButton
{
    constructor(id, groupName, value, className, onChange)
    {
        this.radioButton    =   document.createElement('input');
        this.radioButton.setAttribute("type", "radio");

        this.radioButton.setAttribute('id', id);
        this.radioButton.setAttribute("name", groupName);
        this.radioButton.setAttribute("value", value);
        this.radioButton.classList.add(className);
        this.radioButton.addEventListener("change", onChange)
    }

    disable()
    {
        this.button.disabled = true;
    }

}
