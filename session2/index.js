/*const redElement = document.getElementById('red');
const greenElement = document.getElementById('green');
const blueElement = document.getElementById('blue');
const yellowElement = document.getElementById('yellow');
// ------------EVENT LISTENER-----------
const selectedElement = document.getElementById('selected');
redElement.addEventListener("click",() =>{
    selectedElement.style.backgroundColor = "red";
    selectedElement.innerText = `selected color: ` + "red";
});
greenElement.addEventListener("click",() =>{
    selectedElement.style.backgroundColor = "green";
    selectedElement.innerText = `selected color: ` + "green";
});
blueElement.addEventListener("click",() =>{
    selectedElement.style.backgroundColor = "blue";
    selectedElement.innerText = `selected color: ` + "blue";
});
yellowElement.addEventListener("click",() =>{
    selectedElement.style.backgroundColor = "yellow";
    selectedElement.innerText = `selected color: ` + "yellow";
});
const colorContainerElement = document.getElementById('colors');
colorContainerElement.addEventListener("click", (e) =>{
    
})
    */
//    ------------------EVENT DELEGATION--------
// const colorsContainerELement = document.getElementById("colors");
// const selectedElement = document.getElementById('selected');
// colorsContainerELement.addEventListener("click",(event) =>{
//     const culpretChildElement = event.target;
//     const color = culpretChildElement.id;
//     console.log(color,"color");
//     selectedElement.style.backgroundColor = color;
//     selectedElement.innerText = `selected color: ` + "color";
   
// });
//-----------------Form-----------------

const formElement = document.getElementById("Booking-form");
function validation(payload){
    const {namezz,email} = payload;
    const isNameValid = validateName(namezz);

    const isEmailValid = validateEmail(email);
    return isNameValid && isEmailValid;
    
}
formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form's default submit action
    console.log("form submitted")
    console.log(event);
    const form = event.target;
    const name = form.elements["fullName"].value;
    const email = form.elements["email"].value;
    const doctor = form.elements["doctor"].value;
    const location = form.elements["location"].value;
    const date = form.elements["date"].value;
    const payload = {
        namezz: name, // Corrected key
        email,
        doctor,
        location,
        date,
    };
    console.log(payload);
    if(validation(payload)){
        fetch("locationsedplayload.com",{
            method:"POST",
            body:JSON.stringify(payload),
        });
    }else{
        alert("Enter good values")
    }
});
// -----------------Event focus and blur-----------------
const nameElement = formElement.elements["fullName"];
const emailElement = formElement.elements["email"];
const nameinfoElement = document.getElementById("name-info");
const emailinfoElement = document.getElementById("email-info")
// Name validation
nameElement.addEventListener("focus",()=>{
    nameinfoElement.innerHTML=""
 
});
function validateName(){
    const nameRegex = /^[a-zA-Z\s'-]{1,50}$/;

    let isValid = true;
    if(!nm){
        isValid = false;
        nameinfoElement.innerHTML="Please enter your name!!!"
    }else if(nm.length < 5){
        isValid = false;
        nameinfoElement.innerText = "Need atleast 5 character"
    }else if(!String(nm).match(nameRegex)){
        isValid = flase;
        nameinfoElement.innerText = "Please enter valid name"
    }
}
nameElement.addEventListener("blur",(e)=>{
    const nm = e.target.value.trim();
    validateName(nm);
 
});

// Email validation
emailElement.addEventListener("focus",()=>{
    emailinfoElement.innerText = "";
  
});
function validateEmail(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValid= true;
    if(!email){
        isValid=false;
        emailinfoElement.innerText = "Please enter your email!!!"
    }else if(!String(email).match(emailRegex)){
        isValid = false;
        emailinfoElement.innerText = "Please enter valid email!!!"
    }
    return isValid;
}
emailElement.addEventListener("blur",(e)=>{
    const email = e.target.value.trim();
    validateEmail(email);
   
});
