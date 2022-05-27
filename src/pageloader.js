
const mainScreen = document.getElementById("content");
const fillInContainer = document.createElement("div");
    fillInContainer.setAttribute("class","fillIn")
    fillInContainer.setAttribute("id","fillIn")




const PageThree = () => {


    
    
    mainScreen.appendChild(fillInContainer)

    
    
    // content on page 3
    const contactEmployeeContainer = document.createElement("div")
            contactEmployeeContainer.setAttribute("class","contactEmployeeContainer")
            contactEmployeeContainer.setAttribute("id","contactEmployeeContainer")


    const contactEmployee = document.createElement("div")
            contactEmployee.setAttribute("class", "contactEmployee")
            contactEmployee.setAttribute("id", "contactEmployee")

    const ListEmployee = document.createElement("lu")
            ListEmployee.setAttribute("class", "ListEmployee")
            ListEmployee.setAttribute("id", "ListEmployee")

    const formContainer = document.createElement("div")
            formContainer.setAttribute("class", "formContainer")
            formContainer.setAttribute("id", "formContainer")
    const form = document.createElement("form")
            form.setAttribute("class", "form")
            form.setAttribute("id", "form")
    const formInput = document.createElement("div")
            formInput.setAttribute("class","formInput")
            formInput.setAttribute("id","formInput")
    const nameInput = document.createElement("input")
            nameInput.setAttribute("class","nameInput")
            nameInput.setAttribute("id","nameInput")

    const emailInput = document.createElement("input")
            emailInput.setAttribute("id","emailInput")
            emailInput.setAttribute("class","emailInput")
            emailInput.setAttribute("type","email")
            emailInput.setAttribute("pattern","[^ @]*@[^ @]*")
    const phoneInput = document.createElement("input")
            phoneInput.setAttribute("class","phoneInput")
            phoneInput.setAttribute("id","phoneInput")
            phoneInput.setAttribute("type","tel")
            phoneInput.setAttribute("pattern","[0-9]{3}-[0-9]{2}-[0-9]{3}")
            phoneInput.setAttribute("value","123-45-678")

    const questionInput = document.createElement("textarea")
            questionInput.setAttribute("class","questionInput")
            questionInput.setAttribute("id","questionInput")
            questionInput.setAttribute("type","textarea")
            questionInput.setAttribute("cols","40")
            questionInput.setAttribute("rows","5")

    const submitBtn = document.createElement("button")
            submitBtn.setAttribute("class","submitBtn")
            submitBtn.setAttribute("id","submitBtn")

        submitBtn.addEventListener("click",() =>{
            window.alert("Thanks for contacting us!, we'll let you know soon")

        })

    const nameLabel = document.createElement("label");
            nameLabel.setAttribute("for", 'nameInput');
            nameLabel.setAttribute("class", 'nameLabel');
            nameLabel.innerHTML = "name";
    const emailLabel = document.createElement("label");
            emailLabel.setAttribute("for", "emailInput");
            emailLabel.innerHTML = "email";
            emailLabel.setAttribute("class", 'emailLabel');
    const phoneLabel = document.createElement("label");
            phoneLabel.setAttribute("for", 'phoneInput');
            phoneLabel.innerHTML = "phone";
            phoneLabel.setAttribute("class", 'phoneLabel');
    const questionLabel = document.createElement("label");
            questionLabel.setAttribute("for", 'questionInput');
            questionLabel.innerHTML = "Ask us a question!";
            questionLabel.setAttribute("class", 'questionLabel');
            

        
        


            






    let employees = document.createElement("p")
           

    

    




  
    // set attributes
    
    const contentPage3 = document.createElement("div")
            contentPage3.setAttribute("id","contentPage3");  
            contentPage3.setAttribute("class","contentPage");
   


    const appendEach = () => {
        console.log(mainScreen);
        
        console.log(contentPage3)

        document.body.appendChild(mainScreen)
        mainScreen.appendChild(fillInContainer)
    

        fillInContainer.appendChild(contentPage3);
        fillInContainer.setAttribute("id","fillInContainer")

        contentPage3.appendChild(formContainer)
        contentPage3.appendChild(contactEmployeeContainer)

        formContainer.appendChild(form)
        contactEmployeeContainer.appendChild(contactEmployee)
        contactEmployee.appendChild(ListEmployee)

        form.appendChild(formInput)
        


        formInput.appendChild(nameLabel)
        formInput.appendChild(emailLabel)
        formInput.appendChild(phoneLabel)
        formInput.appendChild(questionLabel)


        formInput.appendChild(nameInput)
        formInput.appendChild(emailInput)
        formInput.appendChild(phoneInput)

        formInput.appendChild(questionInput)
        formInput.appendChild(submitBtn)

            //form, formInput, nameInput, phoneInput, questionInput,submitBtn



        

    }
    
    const fillDiv = () => {
        const emp1 = document.createElement("li")
            emp1.innerText =   "DikkieZjaka @ totallyLegit.com"
        const emp2 = document.createElement("li")
                emp2.textContent = "JorenDom @ totallyLegit.com"
        const emp3 = document.createElement("li")
                emp3.textContent = "JokkeuhTristan @ totallyLegitreally.com"

        employees = [emp1, emp2, emp3]

        nameInput.innerText ="Name"
        submitBtn.innerHTML ="Send"

        

    for(let i = 0; i < employees.length; i++)
            ListEmployee.appendChild(employees[i])
            
            
    }
    
    
    appendEach();
    fillDiv();

    
        
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
    








