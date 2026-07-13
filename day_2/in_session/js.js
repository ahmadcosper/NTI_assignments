function change()
{
    document.getElementById("div").style.backgroundColor = "yellow";
}
function reset()
{
    document.getElementById("div").style.backgroundColor = "#49e03b";
}

function robot_check()
{
    var is_human = true;
    if (is_human)
    {
        document.getElementById("result").innerText = "You are a human!";
    }
    else if (is_human = false)
    {
        document.getElementById("result").innerText = "You are a robot!";
    }
}
function reset()
{
    document.getElementById("result").innerText = "Verification Result";
}

// var input= window.prompt("Please enter your name: ").toLowerCase();

// var name = input == "medhat" ? "Hello Medhat!" : 
// input == "ahmed" ? "Hello Ahmed!" :
// input == "mohamed" ? "Hello Mohamed!" :
// input == "ali" ? "Hello Ali!" :
// "Hello Stranger!";
 
// window.alert(name);

