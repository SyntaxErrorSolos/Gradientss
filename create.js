const input = document.getElementById("input");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const created = document.getElementById("created");
//slider code provided by chatGPT lol (including the HTML part)
let slider = document.getElementById("slider")
let Chromevalue = slider.value;
import chroma from "chroma-js";

function hide() {
    created.style.opacity = 0;
}

document.body.onload = hide()

dark.addEventListener("click", function() {
    const value = input.value;


    if(!value) {
        alert("Enter a hex code!")
    }
    let darken = chroma(value).darken(Chromevalue).hex()
    created.style.opacity = 100;
    created.style.backgroundImage = `linear-gradient(to right, ${value}, ${darken})`
})


light.addEventListener("click", function() {
    const value = input.value;

    if(!value) {
        alert("Enter a hex code!")
    }

    let lighten = chroma(value).brighten(Chromevalue).hex()
    created.style.opacity = 100;
    created.style.backgroundImage = `linear-gradient(to right, ${value}, ${lighten})`
})
