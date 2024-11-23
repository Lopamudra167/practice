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
});
