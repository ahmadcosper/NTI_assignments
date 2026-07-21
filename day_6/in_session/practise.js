//change titles
// document.getElementById("session_day").innerHTML = "Fifth Day" ; 
// hi("Ahmed", 23, "Good Afteroon");
// function hi(name,age,message){
//     console.log(`Hi ${name}, your age is: ${age}. ${message}`);
// }
var demo = document.getElementById("here");



demo.addEventListener("mouseover" ,function(){
    demo.classList.add("hover-active");
    console.log("worked")

})
demo.addEventListener("mouseout" ,function(){
        demo.classList.remove("hover-active");
        console.log("done")

})

var form= document.getElementById("myform");

form.addEventListener("submit", function(event){
event.preventDefault();
form.innerHTML += `<div>Welcome, ${document.getElementById("input").value}</div>`
})