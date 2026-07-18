document.getElementById("task_header").innerHTML = "Implementing CRUD operation on Array";


//crud operations on array

// Ask the user to Build the array through the UI
var elementArr = "";
var aray = [];
function showbar() {
    document.getElementById("elements").hidden = false;
    document.getElementById("hidlabel").hidden = false;
    document.getElementById("enter").hidden = false;
}
//Receive initial array elements
function takeArr() {
    elementArr = document.getElementById("elements").value;
    console.log(elementArr);

    aray = elementArr.split(',');
    document.getElementById("aa").hidden = false;

}
function viewArr() {
    document.getElementById("viewer").hidden = false;
    var viewVar = "";
    if (aray.length === 0) {
        viewVar = "<strong>Your Array Is Empty</strong>"
    }
    else {
        
        viewVar = `<strong>Your Array Elements Are:</strong>\n`
        aray.forEach(x => {
            viewVar += `<p>Index: ${aray.indexOf(x)}   Value: ${x}<p>\n`
        });
        console.log(viewVar);
    }
    document.getElementById("viewer").innerHTML = viewVar;

    // aray.forEach(x => {
    //     console.log(`Element Index: ${aray.indexOf(x)}   Value: ${x} `);
    // });
}

function pushitem(itemx) {
    if (document.getElementById("aditem").value === "") return;
    itemx = document.getElementById("aditem").value;
    aray.push(itemx);
    document.getElementById("aditem").value = ""
    viewArr();
}

function removeitem(itemx) {
    if (document.getElementById("removeindex").value === "") return;
    itemx = document.getElementById("removeindex").value;
    aray.splice(Number(itemx), 1);
    document.getElementById("removeindex").value = ""
    viewArr();
}

function editItem(itemx, itemy) {
    if (document.getElementById("editindex").value === "" || document.getElementById("edithere").value === "") return;
    itemx = document.getElementById("editindex").value;
    itemed = document.getElementById("edithere").value;

    aray[itemx] = itemed;

    document.getElementById("editindex").value = ""
    document.getElementById("edithere").value = ""
    viewArr();
}

function reset() {
    var inputs = document.querySelectorAll("input");
    document.getElementById("viewer").hidden = true;

    inputs.forEach(input => {
        input.value = "";
    })
    aray = [];
    
}


