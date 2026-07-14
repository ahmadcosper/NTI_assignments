//change titles
document.getElementById("session_day").innerHTML = "Third Day" ; 
document.getElementById("task_header").innerHTML = "Part A" ; 



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