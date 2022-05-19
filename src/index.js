console.log("Twerkt")




const createDisplay = () => { 
    const mainScreen = document.getElementById("content");

    const container = document.createElement("div");
    const contentPage1 = document.createElement("div");
    const header = document.createElement("div");
    const footer = document.createElement("div");
    const logo =  document.createElement("div");

    
    container.setAttribute("id","container");
    container.setAttribute("class","container");

    contentPage1.setAttribute("id","contentPage1");  
    contentPage1.setAttribute("class","contentPage1");

    header.setAttribute("id", "header");
    header.setAttribute("class","header");

    logo.setAttribute("id", "logo");
    logo.setAttribute("class","logo");

    footer.setAttribute("id", "footer");
    footer.setAttribute("class","footer");




    const appendEach = () => {
        document.body.appendChild(mainScreen);
        mainScreen.appendChild(container);
        container.appendChild(contentPage1);
        container.appendChild(header);
        container.appendChild(footer);
        header.appendChild(logo)

    }
    appendEach()
}



createDisplay()
