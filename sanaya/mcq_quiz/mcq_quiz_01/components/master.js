
function addJSFiles(jsFilePath, last, callback)
{
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = jsFilePath;
    script.setAttribute("async", "false");
    script.addEventListener("load", start, false);
    document.head.insertBefore(script, document.head.firstElementChild);
    if(last==1)
    {
        // script.onreadystatechange = callback;
        // script.onload = callback;
    }
}

addJSFiles("./components/basic/Span.js", 1, start);
addJSFiles("./components/basic/Button.js", 0, start);
addJSFiles("./components/basic/Div.js", 0, start);
addJSFiles("./components/basic/H1.js", 0, start);
addJSFiles("./components/basic/Label.js", 0, start);
addJSFiles("./components/basic/RadioButton.js", 0, start);
addJSFiles("./components/test.js", 0, start);

function start()
{
    //console.log(Student);
    //console.log(teacher);
}

const reloadUsingLocationHash = () => {
      window.location.hash = "reload";
}

window.onload = reloadUsingLocationHash();
