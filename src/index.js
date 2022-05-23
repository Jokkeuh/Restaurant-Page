
import {PageOne, PageTwo, PageThree} from "./pageloader.js";
import'./style.css';




console.log("Twerkt")




//home, menu, contact
PageOne()
//PageTwo()
//PageThree()



const runDis =() => {

    const homeBtn = document.getElementById("homeBtn")
    const menuBtn = document.getElementById("menuBtn")
    const contactBtn = document.getElementById("contactBtn")
  
    
    
    
    let homePage = false;
    let menuPage = false;
    let contactPage = false;

    
    
    
    
    const setPage = () => {

        const bannerLight = document.getElementById("header")
        const pageOne = document.getElementById("contentPage1")
        const pageTwo = document.getElementById("contentPage2")
        const containerOne = document.getElementById("container")


        
        /*const boxShadowHeader = ()=>{

        }*/
        if (homePage === true) {
            console.log("last check home")
            bannerLight.style.boxShadow ="rgb(12 51 0) 0px 20px 30px -10px" 
            pageTwo.style.display ="none"
            pageOne.style.display = ""
            
            
           PageOne()
        }
        if (menuPage === true){
            console.log("last check menu")
            bannerLight.style.boxShadow = "rgb(255 255 255) 0px 20px 30px -10px"
            pageOne.style.display ="none"
            pageTwo.style.display = ""

            
            
            PageTwo()
            
            

            
            
        }
        if (contactPage === true){
            console.log("last check contact")
            bannerLight.style.boxShadow = "rgb(118 8 0) 0px 20px 30px -10px"
            
            //pageThree.style.display = "none"
            

            
        }
    }
    
    
    


    homeBtn.addEventListener('click', () => {
            
        homePage = true;
        menuPage = false;
        contactPage = false;
        
        setPage()
       
        
        
        
    })


    menuBtn.addEventListener('click', () => {
            
            
        homePage = false;
        menuPage = true;
        contactPage = false;
        
        
        setPage()
        
        
    })


    contactBtn.addEventListener('click', () => {
        
            
            
        homePage = false;
        menuPage = false;
        contactPage = true;
        setPage()
        
        
    })
    
    
    
    
}

runDis()






