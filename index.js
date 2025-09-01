//       // Accessing HTML content
//       const element = document.getElementById("container");
//       const htmlContent = element.innerHTML;

//       console.log(htmlContent);
//       // Output: <h1>Hello, DOM!</h1><p>This is some content.</p>

//       // Modifying HTML content
     
//       const newElement = document.createElement("p");

//       // Set element properties
//       newElement.textContent = "This is a new paragraph.";
//       newElement.setAttribute("class", "new-paragraph");

//       // Append element to an existing element
//       const container = document.getElementById("container");
//       container.appendChild(newElement);

//       // Apply styling
//       newElement.style.color = "blue";
//       newElement.style.fontSize = "20px";
//       newElement.addEventListener("click", function() {
//         console.log("New paragraph clicked!");
//       });
//        // Storing data in localStorage
// localStorage.setItem("name", "Alice");
// localStorage.setItem("age", "25");

// // Retrieving data from localStorage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// console.log(name); // Output: "Alice"
// console.log(age);
// function greet() {
//     console.log("Hello, World!");
//   }
  
//   setTimeout(greet, 2000);
//   console.log("This message appears first.");
//   const button = document.getElementById("myButton");
//   button.textContent = "button1"


// function handleClick(event) {
//   console.log("Button clicked!");
//   // Additional code to handle the click event
// }

// button.addEventListener("click", handleClick);
const counterElement = document.getElementById("counter");

const incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click",(e)=>{
   
const newElement = Number(counterElement.innerHTML) + 1;
counterElement.innerHTML = newElement;
    console.log(e);

});
const decrementButton = document.getElementById("decrement");
decrementButton.addEventListener("click",(E) =>{
    if(Number(counterElement.innerHTML)===0){
        return;
    }
 const newElement = Number(counterElement.innerHTML) - 1;
 counterElement.innerHTML = newElement;
    console.log(E);
})
// function changeCount(val) {
 
//     document.getElementById("counter").textContent =
//       Number(document.getElementById("counter").textContent) + val;
//   }
const containerBox1 = document.getElementById("1");
containerBox1.addEventListener("click",()=>{
containerBox1.textContent = "Clicked";
containerBox1.style.background = "rgb(45,231,231)"
});
const containerBox11 = document.getElementById("1");
containerBox11.addEventListener("mouseover",()=>{
containerBox11.textContent = "hovered";
containerBox11.style.background = "gray"
});
const containerBox2 = document.getElementById("2");
containerBox2.addEventListener("click",()=>{
containerBox2.textContent = "Clicked";
containerBox2.style.background = "rgb(231,231,45)"
});
const containerBox3 = document.getElementById("3");
containerBox3.addEventListener("click",()=>{
containerBox3.textContent = "Clicked";
containerBox3.style.background = "rgb(231,45,231)"
});
const containerBox4 = document.getElementById("4");
containerBox4.addEventListener("click",()=>{
containerBox4.textContent = "Clicked";
containerBox4.style.background = "rgb(45,45,231)"
});
const counterElement2 = document.getElementById("counter10");

const incrementButton2 = document.getElementById("increment10");
incrementButton2.addEventListener("click",(e)=>{
   
const newElement = Number(counterElement2.innerHTML) + 10;
counterElement2.innerHTML = newElement;
    console.log(e);

});
const decrementButton2 = document.getElementById("decrement10");
decrementButton2.addEventListener("click",(E) =>{
    if(Number(counterElement2.innerHTML)===0){
        return;
    }
 const newElement = Number(counterElement2.innerHTML) - 10;
 counterElement2.innerHTML = newElement;
    console.log(E);
})
