
import {PageOne, PageTwo, PageThree} from "./pageloader.js";
import{CreateHeader}from "./header.js"
import{CreateFooter}from "./footer.js"
import'./style.css';

PageOne()
CreateHeader()
CreateFooter()

const fillInContainer = document.getElementById("fillIn")

const allPages = document.querySelectorAll("contentPage")


const removePage =()=>{
    fillInContainer.replaceChildren()
}




//home, menu, contact
//PageTwo()
//PageThree()



const runDis =() => {

    
    

    const homeBtn = document.getElementById("homeBtn")
    const menuBtn = document.getElementById("menuBtn")
    const contactBtn = document.getElementById("contactBtn")
    
    
  
    
    
    
    let homePage = false;
    let menuPage = false;
    let contactPage = false;

    let currentPage = []

    //currentPage = document.getElementById("")



    
    
   
    
    const setPage = () => {

        const bannerLight = document.getElementById("header")
        /*const boxShadowHeader = ()=>{

        }*/
        if (homePage === true) {
            console.log("last check home")
            bannerLight.style.boxShadow ="rgb(12 51 0) 0px 20px 30px -10px" 
            
                
            
          
        }
        if (menuPage === true){
            console.log("last check menu")
            bannerLight.style.boxShadow = "rgb(255 255 255) 0px 20px 30px -10px"
            
        
        }
        if (contactPage === true){
            console.log("last check contact")
            bannerLight.style.boxShadow = "rgb(118 8 0) 0px 20px 30px -10px"
            
        }
    }
    
    
    


    homeBtn.addEventListener('click', () => {
        
        
        removePage()
        homePage = true;
        menuPage = false;
        contactPage = false;
            PageOne()
            setPage()  
            console.log(fillInContainer)
            
    })


    menuBtn.addEventListener('click', () => {
            
        removePage()
        homePage = false;
        menuPage = true;
        contactPage = false;
        
        
        setPage()
        PageTwo()
        
        
    })


    contactBtn.addEventListener('click', () => {
        
        

            
        removePage()
        homePage = false;
        menuPage = false;
        contactPage = true;
        setPage()
        PageThree()
        console.log(allPages)

        
        
    })
    
    
    
    
}

runDis()






