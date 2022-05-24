

const CreateHeader =()=>{
       
       const bodyContainer= document.getElementById("content")
       const header = document.createElement("div");
       const logo =  document.createElement("div");  
       
        
        
        
        //nav Bar
        const navTab = document.createElement("div");
        const navTabHome = document.createElement("div");
        const navTabMenu = document.createElement("div");
        const navTabContact = document.createElement("div");

            //nav Buttons
        const homeBtn = document.createElement("button");
        const menuBtn = document.createElement("button");
        const contactBtn = document.createElement("button");





        header.setAttribute("id", "header");
        header.setAttribute("class","header");

        logo.setAttribute("id", "logo");
        logo.setAttribute("class","logo");


        // navigation bar
        navTab.setAttribute("id","navTab")
        navTab.setAttribute("class","navTab")

        navTabHome.setAttribute("id","navHome")
        navTabHome.setAttribute("class","navHome")
        homeBtn.setAttribute("type","button")
        homeBtn.setAttribute("id","homeBtn")
        homeBtn.setAttribute("class","homeBtn")



        navTabMenu.setAttribute("id","navMenu")
        navTabMenu.setAttribute("class","navMenu")
        menuBtn.setAttribute("id","menuBtn")
        menuBtn.setAttribute("class","menuBtn")


        navTabContact.setAttribute("id","navContact")
        navTabContact.setAttribute("class","navContact")
        contactBtn.setAttribute("id","contactBtn")
        contactBtn.setAttribute("class","contactBtn")

        const appendEach =()=>{
            bodyContainer.appendChild(header)
            header.appendChild(logo)
            header.appendChild(navTab)
            navTab.appendChild(navTabHome)
            navTab.appendChild(navTabMenu)
            navTab.appendChild(navTabContact)
            navTabHome.appendChild(homeBtn)
            navTabMenu.appendChild(menuBtn)
            navTabContact.appendChild(contactBtn)
        }
        appendEach()

        const fillEach = () =>{
            navTabHome.innerText = "Home"
            navTabHome.appendChild(homeBtn);
            navTabMenu.innerText = "Menu"
            navTabMenu.appendChild(menuBtn)
            navTabContact.innerText = "Contact"
            navTabContact.appendChild(contactBtn)
        }
        fillEach()
}


export {CreateHeader}