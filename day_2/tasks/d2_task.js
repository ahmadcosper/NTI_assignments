var username = document.getElementById("username");
var password = document.getElementById("password");
function login() { 
    if (username.value === "admin" && password.value === "admin1234") 
    {
        console.log("Login successful" + "your username is: " + username.value);
    }
    
    else if (password.value.length < 8)
    {
        alert("password must be at least 8 characters long");
    }
    else  (username.value.isEmpty() || password.value.isEmpty())
    {
        alert("username & password are required");
    }
    
}
function reset() {
    username.value = "";
    password.value = "";
}