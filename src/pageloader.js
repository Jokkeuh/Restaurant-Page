
const mainScreen = document.getElementById("content");
const fillInContainer = document.createElement("div");
    fillInContainer.setAttribute("class","fillIn")
    fillInContainer.setAttribute("id","fillIn")




const PageThree = () => {


    
    const contentPage3 = document.createElement("div")
    mainScreen.appendChild(fillInContainer)
    
    // content on page 3


  
    // set attributes
    

    contentPage3.setAttribute("id","contentPage3");  
    contentPage3.setAttribute("class","contentPage");
   


    const appendEach = () => {
        console.log(mainScreen);
        
        console.log(contentPage3)

        document.body.appendChild(mainScreen)
        mainScreen.appendChild(fillInContainer)
        
        fillInContainer.appendChild(contentPage3);
        fillInContainer.setAttribute("id","fillInContainer")
    }
    
    
    appendEach();
    //fillDiv();

    
        
} 

const PageTwo = () => {


    const mainScreen = document.getElementById("content");
    const contentPage2 = document.createElement("div");
    mainScreen.appendChild(fillInContainer);
    
    
    // content on page 2

    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id","menuContainer");
    menuContainer.setAttribute("class","menuContainer");
    const menuTitle =  document.createElement("div");
    const titleText = document.createElement("p");
    

    menuTitle.setAttribute("id","menuTitle")
    menuTitle.setAttribute("class","menuTitle")
    titleText.setAttribute("id","titleOnPageTwo")
    titleText.setAttribute("class","titleOnPageTwo")
    const imgOne = document.createElement("div");
    const imgTwo = document.createElement("div");
    const imgThree = document.createElement("div");

    const images = document.createElement("div");

    images.setAttribute("id", "imagesP2")
    images.setAttribute("class", "imagesP2")


    imgOne.setAttribute("id","imgOneP2")
    imgOne.setAttribute("class", "imgOneP2")

    imgTwo.setAttribute("id", "imgTwoP2")
    imgTwo.setAttribute("class", "imgTwoP2")

    imgThree.setAttribute("id", "imgThreeP2")
    imgThree.setAttribute("class", "imgThreeP2")





  
    // set attributes
    

    contentPage2.setAttribute("id","contentPage2");  
    contentPage2.setAttribute("class","contentPage");


    const appendEach = () => {

        fillInContainer.appendChild(contentPage2);
        contentPage2.appendChild(menuContainer);

        menuContainer.appendChild(menuTitle);
        menuContainer.appendChild(menuTitle);
        menuTitle.appendChild(titleText);
        menuTitle.appendChild(titleText);

        menuContainer.appendChild(images)
        images.appendChild(imgOne)
        images.appendChild(imgTwo)
        images.appendChild(imgThree)

    }
    const fillDiv =()=>{
        titleText.innerText ="MENU"
    }
    
    
    appendEach();
    fillDiv();

    
        
} 

const PageOne = () => { 
    
    //

    // imgs
    const imgOne = document.createElement("div");
    const imgTwo = document.createElement("div");

    // content on page 1
    const contentPage1 = document.createElement("div")
    const viewScreen = document.createElement("div")
    const textOnPage1 = document.createElement("div");
    const titleOnPage1 = document.createElement("div");
    const paraPageOne = document.createElement("p")
    
  
 //page one

    contentPage1.setAttribute("id","contentPage1");  
    contentPage1.setAttribute("class","contentPage");

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



    



    const appendEach = () => {
        
        document.body.appendChild(mainScreen)
        mainScreen.appendChild(fillInContainer)
        fillInContainer.appendChild(contentPage1)


        viewScreen.appendChild(textOnPage1);
        textOnPage1.appendChild(paraPageOne);

        contentPage1.appendChild(viewScreen);
        contentPage1.appendChild(titleOnPage1);
        contentPage1.appendChild(imgOne);
        contentPage1.appendChild(imgTwo);

    }
    

    const fillDiv = () => {

        

        titleOnPage1.innerText = "Welcome to the Italian Taste!"
        paraPageOne.innerText = "The Italian Taste is transforming your dining experience. This much loved Italian restaurant situated in the heart of Surbiton now offers a wider variety of traditional authentic Italian cuisine and an improved selection of fine wines and cocktails.Our restaurant offers a warm relaxing ambience for an enjoyable dining experience. Our culinary chef’s are renowned for their passion in cooking Italian cuisine."
        
    }
    
    appendEach();
    fillDiv();

    
        
} 
    export {PageOne, PageTwo, PageThree}
    







