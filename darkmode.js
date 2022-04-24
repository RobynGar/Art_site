darkModeButton = document.getElementById("dark-mode-button");

const defaultBackground = document.body.style.backgroundColor;
const defaultFont = document.body.style.color;

changeBackground = function(){
    if (document.body.style.backgroundColor == defaultBackground){
        document.body.style.backgroundColor = "#091d1e";
        document.body.style.color = "#aaaaaa";
    }
    else {
        document.body.style.backgroundColor = defaultBackground;
        document.body.style.color = defaultFont;
    }
}

darkModeButton.addEventListener("click", changeBackground);

