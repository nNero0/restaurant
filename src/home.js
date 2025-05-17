export default function home(content){
    const root = content;



    const main = document.createElement("div");
    main.classList.add("main");
    const homeText = document.createElement("p");
    homeText.textContent="This is the home page , with nothing to add.";
    main.appendChild(homeText);
    root.appendChild(main);


}

    // <div class="main">
    //   <p>
    //      Basic home page with nothing to talk about 
    //   </p>
    // </div>