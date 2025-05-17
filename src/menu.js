import pancake from "./images/pancakes.jpg";
import comtam from "./images/comtam.jpg";
import coffee from "./images/coffee.jpg";


export default function menu(content){
    const root = content;

    const main = document.createElement("div");
    main.classList.add("main");
    const menuText = document.createElement("p");
    menuText.textContent="This is the Menu";
    main.appendChild(menuText);   

    const pan =  document.createElement("img");
    pan.src= pancake;
    main.appendChild(pan);

        const com =  document.createElement("img");
    com.src= comtam;
    main.appendChild(com);

        const coff =  document.createElement("img");
    coff.src=coffee;
    main.appendChild(coff);

    root.appendChild(main);



}