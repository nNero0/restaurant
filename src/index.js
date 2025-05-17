import "./styles.css";

import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";


console.log (" hello ");
const root  = document.getElementById("content");
const menuButt  = document.getElementById("Menu-button");
const homeButt  = document.getElementById("Home-button");
const aboutButt  = document.getElementById("About-button");

function clearRoot(root){
    root.innerHTML="";
}

function clearButton() {
    homeButt.classList.remove("active");
    menuButt.classList.remove("active");
    aboutButt.classList.remove("active");
}


homeButt.addEventListener("click", () => {
    clearRoot(root);
    clearButton();
    homeButt.classList.add("active");
    home(root);
});

menuButt.addEventListener("click", () => {
    clearRoot(root);
    clearButton();
    menuButt.classList.add("active");
    menu(root);
});

aboutButt.addEventListener("click", () => {
    clearRoot(root);
    clearButton();
    aboutButt.classList.add("active");
    about(root);
});

homeButt.click();