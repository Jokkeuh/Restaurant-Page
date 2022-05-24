
const CreateFooter = () => {
    const footer = document.createElement("div");
    const footerAdres = document.createElement("div")
    const footerPhone = document.createElement("div")
    const bodyContainer= document.getElementById("content")



    footer.setAttribute("id", "footer");
    footer.setAttribute("class","footer");
    footerAdres.setAttribute("class","footerAdres")
    footerPhone.setAttribute("class","footerPhone")


    const appendEach = () => {
        document.body.appendChild(bodyContainer);
       
        bodyContainer.appendChild(footer);

        header.appendChild(logo);
        header.appendChild(navTab);

        footer.appendChild(footerAdres)
        footer.appendChild(footerPhone)

    }
   

    const fillEach= () =>{
        footerAdres.innerText ="CRACKHOUSELANE 3420"
        footerPhone.innerText ="reach us at 555-78420"
    }

    appendEach()
    fillEach()



}


export {CreateFooter}