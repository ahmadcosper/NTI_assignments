//change titles
document.getElementById("session_day").innerHTML = "Day 8" ; 
// document.getElementById("task_header").innerHTML = "Task 1" ; 
// hi("Ahmed", 23, "Good Afteroon");
// function hi(name,age,message){
//     console.log(`Hi ${name}, your age is: ${age}. ${message}`);
// }


const url  ='https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();
console.log("[1] created XHR Instance");
console.log("ready state = " + xhr.readyState);

xhr.open("GET", url);
xhr.addEventListener("load", ()=>{
console.log("[load] event fired... status =" + xhr.response);

})
// xhr.addEventListener("error", ()=>{
// console.error("[error] network problem... status =" + xhr.response);

// })
xhr.send();
