
import'./style.css';




console.log("Twerkt")




const createDisplay = () => { 
    const mainScreen = document.getElementById("content");

    const container = document.createElement("div");
    const contentPage1 = document.createElement("div");
    const header = document.createElement("div");
    const footer = document.createElement("div");
    const logo =  document.createElement("div");
    const imgOne = document.createElement("div");
    const imgTwo = document.createElement("div");
    //nav Bar
    const navTab = document.createElement("div");
    const navTabHome = document.createElement("div");
    const navTabMenu = document.createElement("div");
    const navTabContact = document.createElement("div");

    // footer
    const footerAdres = document.createElement("div")
    const footerPhone = document.createElement("div")
    
    // content on page 1
    const viewScreen = document.createElement("div")
    const textOnPage1 = document.createElement("div");
    const titleOnPage1 = document.createElement("div");
    const aboutUs = document.createElement("div");
    const hoursInfo = document.createElement("div");

    const paraPageOne = document.createElement("p")

  
    // create divs
    container.setAttribute("id","container");
    container.setAttribute("class","container");

    contentPage1.setAttribute("id","contentPage1");  
    contentPage1.setAttribute("class","contentPage1");

    header.setAttribute("id", "header");
    header.setAttribute("class","header");

    logo.setAttribute("id", "logo");
    logo.setAttribute("class","logo");

    //footer info and divs
    footer.setAttribute("id", "footer");
    footer.setAttribute("class","footer");
    footerAdres.setAttribute("class","footerAdres")
    footerPhone.setAttribute("class","footerPhone")


    // navigation bar
    navTab.setAttribute("id","navTab")
    navTab.setAttribute("class","navTab")
  
    navTabHome.setAttribute("id","navHome")
    navTabHome.setAttribute("class","navHome")
  
    navTabMenu.setAttribute("id","navMenu")
    navTabMenu.setAttribute("class","navMenu")
  
    navTabContact.setAttribute("id","navContact")
    navTabContact.setAttribute("class","navContact")


  //page one
    imgOne.setAttribute("id", "imgOne")
    imgOne.setAttribute("class", "imgOne")

    imgTwo.setAttribute("id", "imgTwo")
    imgTwo.setAttribute("class", "imgTwo")

    viewScreen.setAttribute("id", "viewScreen")
    viewScreen.setAttribute("class", "viewScreen")

    textOnPage1.setAttribute("id", "textPageOne")
    textOnPage1.setAttribute("class", "textPageOne")
    paraPageOne.setAttribute("id", "paraPageOne")
    paraPageOne.setAttribute("class", "paraPageOne")
    
    
    titleOnPage1.setAttribute("id", "titleOnPageOne")
    titleOnPage1.setAttribute("class","titleOnPageOne")

    aboutUs.setAttribute("id", "aboutUs")
    aboutUs.setAttribute("class", "aboutUs")

    hoursInfo.setAttribute("id", "hoursInfo")
    hoursInfo.setAttribute("class", "hoursInfo")




    const appendEach = () => {
        document.body.appendChild(mainScreen);
        mainScreen.appendChild(container);

        container.appendChild(contentPage1);
        container.appendChild(header);
        container.appendChild(footer);

        header.appendChild(logo);
        header.appendChild(navTab);

        footer.appendChild(footerAdres)
        footer.appendChild(footerPhone)

        
        
        viewScreen.appendChild(textOnPage1);
        textOnPage1.appendChild(paraPageOne);
        viewScreen.appendChild(aboutUs);
        viewScreen.appendChild(hoursInfo);

        contentPage1.appendChild(viewScreen);
        contentPage1.appendChild(titleOnPage1);
        contentPage1.appendChild(imgOne);
        contentPage1.appendChild(imgTwo);


        navTab.appendChild(navTabHome);
        navTab.appendChild(navTabMenu);
        navTab.appendChild(navTabContact);

    }

    const fillDiv = () => {
        navTabHome.innerText = "Home"
        navTabMenu.innerText = "Menu"
        navTabContact.innerText = "Contact"
        footerAdres.innerText = "Crackhouselane nr 344"
        footerPhone.innerText = "GSM 032 494456923"

        titleOnPage1.innerText = "Welcome to the Italian Taste!"
        paraPageOne.innerText = "The Italian Taste is transforming your dining experience. This much loved Italian restaurant situated in the heart of Surbiton now offers a wider variety of traditional authentic Italian cuisine and an improved selection of fine wines and cocktails.Our restaurant offers a warm relaxing ambience for an enjoyable dining experience. Our culinary chef’s are renowned for their passion in cooking Italian cuisine."
       
    }
    appendEach();
    fillDiv();
}



createDisplay()
