var emp_name = document.getElementById("name").value;
var emp_age = Number(document.getElementById("age").value);
var emp_rating = Number(document.getElementById("rating").value);
var experience = Number(document.getElementById("experience").value);

//experience
var emp_exp ;
if (experience < 2) 
{
    emp_exp = "Junior";
}
else if (experience >= 2 && experience < 5)
{
    emp_exp = "Mid-level";
}
else if (experience >= 5 && experience < 10)
{
    emp_exp = "Senior";
}
else 
{
    emp_exp = "Expert";
}

//job category
var emp_category;
switch (emp_rating) {
    case 9:
        emp_category = "Excellent"; break;
    case 10:
        emp_category = "Excellent"; break;
    case 7:
        emp_category = "Good"; break; 
    case 8:
        emp_category = "Good"; break; 
    case 5:
        emp_category = "Average"; break;
    case 6:
        emp_category = "Average"; break;
    case 4  :
        emp_category = "Needs More Improvement"; break;        
    case 3:
        emp_category = "Needs More Improvement"; break;        
    case 2:
        emp_category = "Needs More Improvement"; break;
    case 1:
        emp_category = "Needs More Improvement"; break;
    default:
        emp_category = "Invalid Rating, must be between 1 and 10"; break;
}

//salary
var base_salary = 50000;
var emp_salary;

if (experience < 2)
{
    emp_salary = (base_salary+(base_salary*0.1));
}
else if (experience >= 2 && experience <= 5)
{
    emp_salary = (base_salary+(base_salary*0.15));
}
else if (experience  > 5 )
{
    emp_salary = (base_salary+(base_salary*0.2));
}

//work shift
var emp_shift;
var shift = new Date().getHours();
if (shift >= 6 && shift < 14)
{
    emp_shift = "Day Shift";
}
else
{
    emp_shift = "Night Shift";
}

function evaluateEmployee() {
    console.log("Employee name: " + document.getElementById("name").value);
    console.log("Employee Age: " + document.getElementById("age").value);
    console.log("Employee Experience: " + emp_exp);
    console.log("Employee Rating: " + emp_category);
    console.log("Employee Salary: $" + emp_salary);
    console.log("Employee Shift: " + emp_shift);

    document.getElementById("right").innerHTML = `
        <h3>Employee Report</h3>
        <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
        <p><strong>Age:</strong> ${emp_age}</p>
        <p><strong>Experience:</strong> ${emp_exp}</p>
        <p><strong>Rating:</strong> ${emp_category}</p>
        <p><strong>Salary:</strong> $${emp_salary.toFixed(2)}</p>
        <p><strong>Shift:</strong> ${emp_shift}</p>
    `;
}
function workshift() {
alert("Employee Shift: " + emp_shift);}


