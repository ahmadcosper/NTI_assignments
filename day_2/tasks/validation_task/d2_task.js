var username = document.getElementById("username");
var password = document.getElementById("password");
function register() { 
    
    if (username.value === "" || password.value === "")
    {
        alert("username & password are required");
    }
    else if (password.value.length < 8)
    {
        alert("password must be at least 8 characters long");
     
    }
    else 
    {
        console.log("Registration successful " + "your username is: " + username.value);
       
    }
   
}
function reset() {
    username.value = "";
    password.value = "";
}