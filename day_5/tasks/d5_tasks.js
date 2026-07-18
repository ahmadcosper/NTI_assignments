//change titles
document.getElementById("session_day").innerHTML = "Day 5" ; 
// document.getElementById("task_header").innerHTML = "" ; 
// document.getElementById("task_header2").innerHTML = "" ;
// document.getElementById("task_header3").innerHTML = "" ;
// document.getElementById("task_header4").innerHTML = "" ;


//Task 1: Functions and Callback Functions
//1. Create a multiply function that takes two numbers as parameters and returns
// their multiplication.
 mul= (a,b) => a*b;
 console.log(mul(5,6)); //30
// 2. Create a function called calculate that accepts two numbers and a function
// (multiply from step 1). The function calculate should perform the operation
// passed to it.
function calculate(x,y,z){z= mul(x,y);console.log(z);}
calculate(7,8,mul());   //56
// 3. Callback: Create another function displayResult that accepts the result of the
// calculation from calculate and displays it using console.log().
function display(calculation){return calculation};
display(calculate(8,9,mul()));  //72
// 4. Call the calculate function and pass multiply and two numbers as parameters.
calculate(10,20,mul())      //200

// Task 2: Working with setTimeout and setInterval
// Task:
// 1. setTimeout Example:
// a. Create a greetUser function that logs the message "Hello, User!" after
// 3 seconds using setTimeout.
var greet = ()=> console.log("Hello User!");
setTimeout(() => {
    greet()
}, 3000);
// 2. setInterval Example:
// a. Create a countdown function that counts down from 10 to 1 and logs each
// number every second.
// b. After the countdown reaches 0, display the message "Time's up!".


//same as below
var count = 10;
// var countdown = setInterval(() => {
//     console.log(count--);
//     if(count===0){
//         clearInterval(countdown);
//         console.log("Tme is up!");
//     }
// }, 1000);


// 3. Clear setInterval:
// a. Modify the countdown function to stop the interval after 5 seconds using
// clearInterval.



var countdown = setInterval(() => {
    console.log(count--);
    
}, 1000);
setTimeout(() => {
    clearInterval(countdown);
}, 5000);


// 4. Clear setTimeout:
// a. Use setTimeout to log a message "This will be cleared!" after 5
// seconds and then use clearTimeout to cancel the message before it
// appears.
clearTimeout(setTimeout(() => {
   console.log("This will be cleared!") 
}, 5000))
