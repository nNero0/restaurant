export default function about(content){
    const root = content;



    const main = document.createElement("div");
    main.classList.add("main");
    const homeText = document.createElement("p");
    homeText.textContent="About page , About page , About Page.";
    main.appendChild(homeText);
    root.appendChild(main);


}

    // <div class="main">
    //   <p>
    //      Basic home page with nothing to talk about 
    //   </p>
    // </div>