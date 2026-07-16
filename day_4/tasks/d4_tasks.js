//change titles
document.getElementById("session_day").innerHTML = "Day 4" ; 
document.getElementById("task_header").innerHTML = "Part A: Objects (Console Log output)" ; 
document.getElementById("task_header2").innerHTML = "Part B: Array Basics (Console Log output)" ;
document.getElementById("task_header3").innerHTML = "Part C: Array Methods (Console Log output)" ;
document.getElementById("task_header4").innerHTML = "Part D:  Mix (Objects + Arrays) (Console Log output)" ;

// var users = [
//   { name: "Ali", city: "CAI" },
//   { name: "Sara", city: "GZA" },
//   { name: "Mona", city: "CAI" }
// ];
// // console.log(users);
// var byCity = users.reduce(function (acc, u) {
//   acc[u.city] = acc[u.city] || [];  

//   acc[u.city].push(u);
//   return acc;
// }, {});

// console.log(byCity);
///////////////////////////////////////////////////////////

//first task implementing array reduce method
var users2 = [
  { name: "Ali", city: "CAI" },
  { name: "Sara", city: "GZA" },
  { name: "Mona", city: "CAI" }
];

var resultobj = {};

for (var x of users2){
    var objarr = [];
    var temp= x.city;
    for (var y of users2){

        if(y.city === temp) objarr.push(y);
    }
    resultobj[x.city] = objarr;
}
console.log(resultobj);

// Part A — Objects
// 1. Create an object named car with these properties: brand , model , year , and color . Then
// print the whole object.
var car = {
barnd : "Toyota",
model : "Corolla",
year : "2006",
color : "Dark Blue"
};
console.log(car);

// 2. Using the car object, print the brand using dot notation and print the year using bracket
// notation.
console.log(car.barnd + "-" + car["year"] );

// 3. Change the color of the car to "black" , then add a new property price with any number
// value. Print the object again
car.color = "black";
car["price"]= 500000;
console.log(car);

// 4. Delete the year property from the car object, then print car.year and explain what you
// see in the console.
delete car.year;
console.log(car.year); //undefined bcs the property does not exist anymore

// 5. Create an object with this property key: "student-name" and value "Sara" . Also add age:
//  20 . Print the student name correctly
var student = {
    "student-name": "Sara",
};
student["age"] = 20;
console.log(student["student-name"]);

// 6. Create a nested object for a book: title , and author as an object with firstName and
// lastName . Print the author's last name.
var book = {title: "The 48 Laws Of Power", author : {"first-name": "Robert", "last-name": "Greene" }}
console.log(book.author["last-name"]);

// 7. For this object: { name: "Ali", age: 25, city: "Cairo" } , print all keys using
// Object.keys , all values using Object.values , and check if it has a property named "job"
// using hasOwnProperty .
var man= { name: "Ali", age: 25, city: "Cairo" };
console.log(Object.keys(man));
console.log(`${Object.values(man)}
Has a prob named job? ${man.hasOwnProperty("job")}`);

// 8. Create an object settings with theme: "dark" and lang: "en" . Use Object.freeze on
// it, then try to change theme to "light" and try to add fontSize: 16 . Print the object and
// write what happened.
var settings = { theme : "dark", lang: "eng"};
Object.freeze(settings);
settings.theme = "light";
settings["font-size"] = 16;
console.log(settings); //nothing changed after creating the object sice its frozen
///////////////////////////////////////////////////////////////////////////////////////////////////
//Part B — Arrays Basics
// 9. Create an array of 5 city names. Print the array and print its length
var dawla =["Damietta" , "Cairo", "Mansora", "Sharm", "Alex"];
console.log(`${dawla}, ${dawla.length}`);

// 10. Print the first city, the second city, and the last city in the array
console.log(`${dawla[0]}, ${dawla[1]}, ${dawla[4]} `);
// 11. Add a city at the end using push , then add a city at the start using unshift . Print the array
// after each step.
dawla.push("Sohag"); dawla.unshift("Port-Said");
console.log(dawla);
// 12. Remove the last city using pop , then remove the first city using shift . Print the array after
// each step.
dawla.pop(); console.log(dawla); dawla.shift(); console.log(dawla);
// 13. Using this array: ["HTML", "CSS", "JS", "React"] , print the index of "JS" , check if
// "Python" exists using includes , and print the result.
var prog= ["HTML", "CSS", "JS", "React"];
console.log(`Indes of "JS" is: ${prog.indexOf("JS")}
Array includes "Python" ? ${prog.includes("Python")} `);
// 14. Print all items in this array using forEach : ["pen", "book", "bag"] . Also print each item
// with its index.
var sch= ["pen", "book", "bag"];
sch.forEach(element => { console.log(`Item: ${element}, Index: ${sch.indexOf(element)}`)
});
// 15. Using for...of on ["red", "green", "blue", "yellow"] , print the colors one by one,
// but stop when you reach "blue" (do not print blue).
var colors = ["red", "green", "blue", "yellow"];
for(x of colors){
    if(x === "blue") break;
    console.log(x);
}
// 16. Start with ["A", "B", "C"] . Add "D" and "E" at the end, remove the first item, then
// print the final array and its length.
var alph =  ["A", "B", "C"];
alph.push("D"); alph.push("E"); alph.shift();
console.log(alph);
///////////////////////////////////////////////////////////////////////////////////////////////////
// Part C — Array Methods
// 17. Using map , convert this array to uppercase: ["apple", "banana", "cherry"] . Print the
// new array and also print the original array.
var fruits =["apple", "banana", "cherry"];
var newfruits= fruits.map( (a)=>  a.toUpperCase() )
console.log(newfruits);
// 18. Using filter , keep only the numbers greater than 50 from: [10, 55, 30, 80, 45, 90] .
var nums = [10, 55, 30, 80, 45, 90];
var newnums = nums.filter( (a)=> a>50? a : false)
console.log(newnums);

// 19. From ["Cairo", "Giza", "Alex", "Aswan"] , use find to get the first city that starts with
// "A" , and use findIndex to get its index.
var egypt = ["Cairo", "Giza", "Alex", "Aswan"];
var newegy= egypt.find((a)=> a.startsWith('A')? a : false)
console.log(newegy);

// 20. Using slice , copy part of this array: ["a", "b", "c", "d", "e"] from index 1 to index 4
// (not including 4). Print the copy and the original.
var alpha = ["a", "b", "c", "d", "e"];
console.log(alpha.slice('1' ,'4'));
// 21. Using splice , remove 2 items starting from index 1 in this array: ["one", "two",
// "three", "four", "five"] . Print the removed items and the array after the change.
var strnumb =["one", "two","three", "four", "five"];
var newstrnumb = strnumb.splice(1 , 3);
console.log(strnumb, newstrnumb);
// 22. Sort this numbers array correctly from smallest to largest: [40, 100, 1, 5, 25] . Print the
// result.
var numbers = [40, 100, 1, 5, 25];
console.log(numbers.sort(function(a,b){return a-b;}));
// 23. Use some to check if any age in [16, 21, 17, 19] is greater than or equal to 18. Use
// every to check if all ages are greater than or equal to 18. Print both results.
var ages = [16, 21, 17, 19];
console.log(`Some ages that are greater than or equal to 18? ${ages.some((a)=> a>=18? a:false)}
Every ages that are greater than or equal to 18? ${ages.some((a)=> a >= 18? a:false)}`);
// 24. Use reduce to calculate the total of: [5, 10, 15, 20] . Print the total.
var tot =[5, 10, 15, 20];
console.log(`${tot.reduce((a,b)=> a+b)}`);
// Part D — Mix (Objects + Arrays)
// 25. You have this array of students: [{ name: "Omar", grade: 80 }, { name: "Mona",
// grade: 90 }, { name: "Ali", grade: 70 }] Use a loop to print each student name and
// grade.
var studar= [{ name: "Omar", grade: 80 }, { name: "Mona", grade: 90 }, { name: "Ali", grade: 70 }];
for (var x of studar){console.log(`student name is: ${x.name} -- student grade is: ${x.grade}`)}
// 26. From the same students array, use filter to get only students with grade greater than or
// equal to 80, then print their names only using map .
console.log(studar.filter((a)=> a.grade>= 80? a:false));
var names = studar.filter((a)=> a.grade>= 80? a:false);
for (var x of names){console.log(`${x.name}`)}

// 27. Create an array of product objects. Each product has name and price . Use reduce to
// calculate the total price of all products and print it.
var products = [{name: "shoes", price: 500} , {name: "T-shirt", price: 900}, {name:"Jeans", price: 1200}];
var total= products.reduce(
    function(a , b, c){
         
      return   a + b.price;
    },0
)
console.log("Total Price = "+ total);
// 28. You have: ["js", "html", "css", "js", "react", "js"] . Print how many times "js"
// appears in the array.
var lg= ["js", "html", "css", "js", "react", "js"];
var counter= lg.reduce(function(a,b){
    if(b === "js") a++
    return a;
},0)
console.log("Number of 'js' in aray is: " +counter);
// 29. Create an object classroom with: teacher (string), and students (array of 4 names).
// Print the teacher name, print the number of students, and print the last student name.
var classroom = { teacher: "Ahmed", student: ["khalid", "emad", "omar", "mohammed"]};
console.log(`Teacher Name is: ${classroom.teacher}
Number of Students is: ${classroom.student.length}
Last Student Name is: ${classroom.student[classroom.student.length-1]}`);
// 30. You have this array: [{ id: 1, title: "Pen", price: 10 }, { id: 2, title: "Book",
// price: 50 }, { id: 3, title: "Bag", price: 25 }] . Create a new array that contains
// only the titles in uppercase, then create another array that contains only products with price
// less than 30, and finally print the total of all prices.
var given= [{ id: 1, title: "Pen", price: 10 }, { id: 2, title: "Book",
    price: 50 }, { id: 3, title: "Bag", price: 25 }]
    var titles = [];
    for (var x of given){
        titles.push(x.title.toUpperCase())
    }
    console.log(titles);
    var prducts = [];
    for(var x of given){
        if(x.price < 30) prducts.push(x)
    } 
    console.log("Products with price less than 30: ");
    console.log(prducts);

    var phew= given.reduce((a,b)=> a+b.price, 0)
    console.log("Total Price of All Products Is: "+phew); 