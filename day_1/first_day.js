function calculate() {
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);

    document.getElementById("sum").innerText = "Sum: " + (x + y);
    document.getElementById("substraction").innerText = "Subtraction: " + (x - y);
    document.getElementById("multiplication").innerText = "Multiplication: " + (x * y);
    document.getElementById("division").innerText = "Division: " + (x / y);
}

function greet() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = Number(document.getElementById("age").value);
    document.getElementById("greeting").innerText = "Hello, " + name + " " + surname + "! You are " + age + " years old 😉";
}