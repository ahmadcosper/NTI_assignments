document.getElementById("task_header").innerHTML = "Implementing CRUD operation on DOM";

document.getElementById("task_header").innerHTML = "Implementing CRUD operation on DOM";

var data = [];

function adduser(){
    var fname = document.getElementById("fnam").value;
    var lname = document.getElementById("lnam").value;
    var age   = document.getElementById("age").value;
    var grad  = document.getElementById("grad").checked;

    if (!fname || !lname || !age) { alert("please fill all fields"); return; }

    data.push({first_name: fname, last_name: lname, _age: age, _grad: grad}); 
    viewdata();
    clearInputs();
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
                    <button class="btn-update" onclick="update(${index})">Update</button>
                    <button class="btn-delete" onclick="deleteUser(${index})">Delete</button>
                </td>
            `;
        }
        else {
            row.innerHTML += `
                <td class="status-false">✖</td>
                <td class="action-buttons">
                    <button class="btn-update" onclick="update(${index})">Update</button>
                    <button class="btn-delete" onclick="deleteUser(${index})">Delete</button>
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

    data.forEach((element, index) => {
        if (element._grad == true)
        {
            var row = document.createElement("tr");

            row.innerHTML = `
                <td>${element.first_name}</td>
                <td>${element.last_name}</td>
                <td>${element._age}</td>
                <td class="status-true">✔</td>
                <td class="action-buttons">
                    <button class="btn-update" onclick="update(${index})">Update</button>
                    <button class="btn-delete" onclick="deleteUser(${index})">Delete</button>
                </td>
            `;

            tbody.appendChild(row);
        }
    });

    document.querySelector(".table-container").hidden = false;
}

function searchByName(){
    var searched = document.getElementById("searchID").value;
    var tbody = document.querySelector(".user-table tbody");
    tbody.innerHTML = "";

    data.forEach((element, index) => {
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
                        <button class="btn-update" onclick="update(${index})">Update</button>
                        <button class="btn-delete" onclick="deleteUser(${index})">Delete</button>
                    </td>
                `;
            }
            else {
                row.innerHTML += `
                    <td class="status-false">✖</td>
                    <td class="action-buttons">
                        <button class="btn-update" onclick="update(${index})">Update</button>
                        <button class="btn-delete" onclick="deleteUser(${index})">Delete</button>
                    </td>
                `;
            } 

            tbody.appendChild(row);
            document.querySelector(".table-container").hidden = false;
        }

    });
    
}

function update(index){
    var element = data[index];
    document.getElementById("fnam").value = element.first_name;
    document.getElementById("lnam").value = element.last_name;
    document.getElementById("age").value = element._age;
    document.getElementById("grad").checked = element._grad;

    var btn = document.getElementById("input_button");
    btn.innerText = "Update User";
    btn.onclick = function() { update_user_button(index); };
}

function update_user_button(index){
    var toEdit = data[index];
    toEdit.first_name = document.getElementById("fnam").value;
    toEdit.last_name = document.getElementById("lnam").value;
    toEdit._age = document.getElementById("age").value;
    toEdit._grad = document.getElementById("grad").checked;

    viewdata();

    var btn = document.getElementById("input_button");
    btn.innerText = "Add User";
    btn.onclick = adduser;
    clearInputs();
}

function deleteUser(index) {
    data.splice(index, 1);
    viewdata();
}

function clearInputs() {
    document.getElementById("fnam").value = "";
    document.getElementById("lnam").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grad").checked = false;
    document.getElementById("searchID").value ="";
}