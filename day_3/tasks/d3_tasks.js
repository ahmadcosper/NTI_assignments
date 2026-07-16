//change titles
document.getElementById("session_day").innerHTML = "Day 3" ; 
document.getElementById("task_header").innerHTML = "Part A: Strings (Console Log output)" ; 
document.getElementById("task_header2").innerHTML = "Part B: Numbers & Math (Console Log output)" ;
document.getElementById("task_header3").innerHTML = "Part C: Loops (Console Log output)" ;
document.getElementById("task_header4").innerHTML = "Part D: MIX (Console Log output)" ;

// **************** PART A STRINGS ****************
console.log("\n**************** PART A STRINGS ****************\n")

// 1-Create a variable with a full name (for example "Ahmed Ali" ). Print how many characters
//are in that name


var fullname = "Ahmed Shakir Cosper";
console.log(fullname.length);

// 2. Take the sentence "I am learning JavaScript" . Print it once in uppercase and once in
//lowercase
 var sent= "I am learning JavaScript";
 console.log(sent.toLowerCase());
 console.log(sent.toUpperCase());

//3. You have an email: "student@nti.com" . Check whether this email contains the character
//"@" and print the result.
var mail = "student@nti.com";
console.log("sentence contains '@'? " + mail.includes('@'));

//4. For the word "JavaScript" , print the first character and the last character.
var word = "JavaScript";
console.log(
`First Character is: ${word[0]}
Last Character is: ${word[word.length-1]}`
);

//5. In the text "This is a bad day" , replace the word "bad" with "good" , then print the
//new text.
var text ="This is a bad day";
console.log(text.replace("bad" , "good" ));

//6. Take the sentence "I love coding" . Split it into an array of words, then join those words
//again using "-" between them and print the result.
var str = "I love coding";
var splitted= str.split(" ");
console.log(`Splitted Words Array: ${splitted}`);
var rejoined= splitted.join('-');
console.log(`Rejoined Words Array: ${rejoined}`);

//7. You have the text " nti egypt training " . Remove the extra spaces from the start and
//end, convert the text to uppercase, then replace "EGYPT" with "CAIRO" and print the final
//result
var txt = " nti egypt training ";
var edited = txt.trim();
edited = edited.toUpperCase();
edited = edited.replace("EGYPT" , "CAIRO");
console.log(edited);

// **************** PART B  NUMBERS & MATH ****************
console.log("\n**************** PART B  NUMBERS & MATH ****************\n")
//8. Convert the string "45.8" into a real number, then print that number
var num8 = "45.8";
var realnum8 = +num8;
console.log(realnum8);

//9. Using the number 7.6 , print three results: rounded value, floor value, and ceil value.
var num9 = 7.6;
console.log(`Rounded Value = ${Math.round(num9)}
Floor Value = ${Math.floor(num9)}
Ceil Value = ${Math.ceil(num9)}`);

// 10. From the numbers 12, 5, 28, 9 , find and print the largest number and the smallest
// number.
console.log("maximum number in (12, 5, 28, 9) is: "+ Math.max(12, 5, 28, 9));
console.log("minimum number in (12, 5, 28, 9) is: "+ Math.min(12, 5, 28, 9));

//11. Generate a random integer between 1 and 20 (inclusive) and print it.
var minimumNumber = 1;
var maximumNumber = 20;

var randomNumber = Math.random();
var randomInRange =
  Math.floor(randomNumber * (maximumNumber - minimumNumber + 1)) + minimumNumber;
console.log(randomInRange);

//12. Take the price 19.4567 and print it with only 2 digits after the decimal point.
var price = 19.4567;
console.log(price.toFixed(2));

//13. Generate 5 random integers between 1 and 50. Then print the largest number, the smallest
//number, and the average of the 5 numbers (show the average with 2 decimal places).
var minimumNumber = 1;
var maximumNumber = 50;

var numarray = [];
for(var i = 0; i < 5; i++)
{
var randomNumber = Math.random();
numarray[i] = Math.floor(randomNumber * (maximumNumber - minimumNumber + 1)) + minimumNumber;
}
var max= Math.max(...numarray);
var min = Math.min(...numarray);
var sum =0;
for (i=0 ; i<5; i++){
    sum += numarray[i];
}
var average = sum/numarray.length;
console.log("Generated Numbers are: " + numarray);
console.log("maximum number is: "+ max);
console.log("minimum number is: "+ min);
console.log("average number is: "+ average.toFixed(2));

// **************** PART C  Loops ****************
console.log("\n**************** PART C  Loops ****************\n")

//14. Write a for loop that prints all numbers from 1 to 20.
var _20 = "";
for(var i = 1; i<21 ; i++)
{
_20 += i +" "
}
console.log(_20);

//15. Write a for loop that prints only the odd numbers from 1 to 15.
for(var i = 1; i<16; i+=2){
    console.log(i);
}

//16. Write a while loop that counts down from 10 to 1 and prints each number.
console.log("Counting from 10 to 1 and printing the count");
var count = 0;
for(var i = 10; i>0; i--){
count++
console.log(i);
}
console.log(count);

//17. You have this array: ["Sara", "Omar", "Mona", "Youssef"] . Use for...of to print each
//name on a new line.
var arr= ["Sara", "Omar", "Mona", "Youssef"];
for (x of arr){
    console.log(x);
}

//18. Use a for loop with break to print numbers from 1 to 10, but stop the loop before printing
//7. The output should be: 1 2 3 4 5 6
var out="";
for (var i = 1; i <= 10; i++) {
    if (i === 7) {
        break; 
    }
    out += i + " ";
}
console.log(out);

//19. Use nested loops to print the multiplication table from 1 to 3. Each line should look like: 2 *
//3 = 6
for(i =1; i<4 ; i++){
    for(var j =1 ; j<10; j++){
        console.log(
            `${i} * ${j} = ${i*j}`
        );
    }
    console.log("-----------------------");
}

//20.Write a program that prints all numbers from 1 to 30, but: skip every number that is divisible
//by 3 using continue , and stop completely when you reach number 25 using break .
var output="";
for (var i = 1 ; i< 31; i++){
    if(i === 25) break;
    if(i % 3 === 0) continue;
     output += i + " ";
}
    console.log(output);

// **************** PART D  MIX ****************
console.log("\n**************** PART D  MIX ****************\n")

//21. Using a loop, print each letter of the word "HELLO" on a separate line.
var wrd = "hello";
for (var i=0; i< wrd.length; i++){
    console.log(wrd[i]);
}

//22. You have the array [10, 20, 30, 40] . 
// Calculate the sum of all numbers and print the total.
var ar=[10, 20, 30, 40];
var sum =0;
for (i=0; i<ar.length; i++){
sum += ar[i];
}
console.log(sum);

//23. Count how many times the letter "a" or "A" appears in this sentence: "JavaScript is
//amazing and awesome" Then print the count.
var testthis= "JavaScript is amazing and awesome";
var testcount =0;
for (var i=0; i<testthis.length; i++){
    if (testthis[i] == "a" || testthis.length[i] == "A") testcount++;
}
console.log(testcount);

//24. From the grades array [70, 85, 92, 60, 77, 88] , print only the even grades.
var grades = [70, 85, 92, 60, 77, 88];
for (var i= 0; i< grades.length; i++){
    if((grades[i] % 2) == 0) console.log(grades[i]);
}

//25. Using nested loops, print this stars pattern:
// *
// * *
// * * *
// * * * *

for(var i=1; i<5 ; i++){
    var stars ="";
    for(var j =1; j<=i; j++){
        stars += "* " ;
    }
    console.log(stars);
}

//26. You have this array of student names: ["ahmed", "sara", "omar", "laila", "hassan"] .
// Loop through the array, convert each name to uppercase, then print 
// only the names that start
// with the letter "A" or "S" , and also print how many names matched.
var studentss = ["ahmed", "sara", "omar", "laila", "hassan"];
var times = 0;
var namesmatched = "";

for (var i = 0; i < studentss.length; i++) {
    studentss[i] = studentss[i].toUpperCase();
    
    if (studentss[i].charAt(0) === "A" || studentss[i].charAt(0) === "S") {
        times++;
        namesmatched += studentss[i] + " ";
    }
}

console.log(
`Names starting with 'A' or 'S' are: ${namesmatched}
Number of names matched= ${times}`
);