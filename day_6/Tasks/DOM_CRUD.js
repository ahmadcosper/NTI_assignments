document.getElementById("task_header").innerHTML = "Implementing CRUD operation on DOM";


//crud operations on DOM
//create a object array that has input values
// var fname = document.getElementById("fnam").value;
// var lname = document.getElementById("lnam").value;
// var age   = document.getElementById("age").value;
// var grad  = document.getElementById("grad").value;
// var data = [];

// function adduser(){
//     data.push([{first_name: fname, last_name: lname, _age: age, _grad: grad }]) 
//     viewdata();
// }

// function viewdata(){
//     data.forEach(element => {
//     document.getElementsByClassName("user-table").innerHTML += `<tr id="${element}">
// <td>${element.first_name}</td>
// <td>${element.last_name}</td>
// <td>${element.age}</td>
// </tr>`        
// if(element._grad == true){
//     document.getElementsById(element).innerHTML += `<td class="status-true">✔</td>
// <td class="action-buttons">
// <button class="btn-update">Update</button>
// <button class="btn-delete">Delete</button>`
// }
// else if (element._grad == false) {
//     document.getElementsById(element).innerHTML += `<td class="status-false">✖</td>
//         <td class="action-buttons">
//           <button class="btn-update">Update</button>
//           <button class="btn-delete">Delete</button>
//         </td>`
// }   
// });
// document.getElementsByClassName("table-container").hidden = false ;
    
// }


var data = [];

function adduser(){
    var fname = document.getElementById("fnam").value;
    var lname = document.getElementById("lnam").value;
    var age   = document.getElementById("age").value;
    var grad  = document.getElementById("grad").checked;

        if (!fname || !lname || !age) {alert("please fill all fields"); return}

    data.push({first_name: fname, last_name: lname, _age: age, _grad: grad}); 
    viewdata();
}

function viewdata(){


    var tbody = document.querySelector(".user-table tbody");
    tbody.innerHTML = "";

    data.forEach((element, index) => {
        var row = document.createElement("tr");
        row.id = "row-" + index;

        row.innerHTML = `
            <td>${element.first_name}</td>
            <td>${element.last_name}</td>
            <td>${element._age}</td>
        `;

        if(element._grad == true){
            row.innerHTML += `
                <td class="status-true">✔</td>
                <td class="action-buttons">
                    <button class="btn-update">Update</button>
                    <button class="btn-delete">Delete</button>
                </td>
            `;
        }
        else {
            row.innerHTML += `
                <td class="status-false">✖</td>
                <td class="action-buttons">
                    <button class="btn-update">Update</button>
                    <button class="btn-delete">Delete</button>
                </td>
            `;
        } 

        tbody.appendChild(row);
    });

    document.querySelector(".table-container").hidden = false;
}
function grads_only(){
    var tbody = document.querySelector(".user-table tbody");
    tbody.innerHTML = "";

    data.forEach(element => {
        if (element._grad == true)
        {
            
        var row = document.createElement("tr");
        

        row.innerHTML = `
            <td>${element.first_name}</td>
            <td>${element.last_name}</td>
            <td>${element._age}</td>
        `;

            row.innerHTML += `
                <td class="status-true">✔</td>
                <td class="action-buttons">
                    <button class="btn-update">Update</button>
                    <button class="btn-delete">Delete</button>
                </td>
            `;

        tbody.appendChild(row);
    document.querySelector(".table-container").hidden = false;
        }
    });

}

function searchByName(){
    var searched = document.getElementById("searchID").value;
    var tbody = document.querySelector(".user-table tbody");
            tbody.innerHTML = "";

    data.forEach(element => {
        if(element.first_name.toLowerCase().includes(searched.toLowerCase()) || element.last_name.toLowerCase().includes(searched.toLowerCase()))
        {
            
            var row = document.createElement("tr");
        

        row.innerHTML = `
            <td>${element.first_name}</td>
            <td>${element.last_name}</td>
            <td>${element._age}</td>
        `;

          if(element._grad == true){
            row.innerHTML += `
                <td class="status-true">✔</td>
                <td class="action-buttons">
                    <button class="btn-update">Update</button>
                    <button class="btn-delete">Delete</button>
                </td>
            `;
        }
        else {
            row.innerHTML += `
                <td class="status-false">✖</td>
                <td class="action-buttons">
                    <button class="btn-update">Update</button>
                    <button class="btn-delete">Delete</button>
                </td>
            `;
        } 

        tbody.appendChild(row);
    document.querySelector(".table-container").hidden = false;
        }
       
    });
}