var name, birth_year, conf;


function get_data(){
    name = window.prompt("Enter your name:");
    birth_year = window.prompt("Enter your birth year:");
    conf = window.confirm("Are you a student?" );

var date = new Date();
var  age = date.getFullYear() - Number(birth_year);

    var category;
if(age>0 && age < 13)
{
    category= "Kid";
}
else if (age >= 13 && age <=17)
{
    category="Teen";
}
else if (age >= 18 && age <=59)
{
    category="Adult";
}
else if (age >= 60)
{
    category="Senior";
}
else category="invalid";


document.getElementById("output").innerHTML= "Hello "+ name +", Your Age is: " + age + "\nAge Category: "+ category+"\n"

if(conf == true) alert("don't forget to study hard!");

console.log("Hello "+ name +", Your Age is: " + age + "\nAge Category: "+ category+"\n");
}



