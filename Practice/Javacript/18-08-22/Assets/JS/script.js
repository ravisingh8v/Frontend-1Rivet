
let data;
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    data = await response.json();
    console.log(data);
    if (data.length) {
        putData(data);
    }
}
getData();
// const data =[{id:"1"},{name:"ravi"}]

// putData();
function putData(data) {
    let tbody = document.querySelector("#tbody");

    data.forEach((user) => {
        let tr = document.createElement("tr");
        //    console.log(tr);
        for (const key in user) {
            if (["id", "name", "username", "email", "phone"].includes(key)) {
                // console.log(td);
                const element = user[key];
                let td = document.createElement("td");
                td.textContent = element;
                // console.log(td);
                // console.log(element);
                tr.appendChild(td);
                // console.log(tr);
            }
        }

        tbody.appendChild(tr);
        // console.log(tbody);
    });
}


// filter 


function filterData() {
    debugger
    const tableBody = document.getElementById("tbody");
    const searchBox = document.getElementById("Input");
    const table = document.getElementById("myTable");
    const not_found = document.querySelector(".not-found");
    tableBody.textContent = "";

    let filterData = [];
    console.log(data);
    if (searchBox.value !== "") {
        filterData = data.filter((item) => {
            return item.name.toUpperCase().includes(searchBox.value.toUpperCase());
        });

    } else {
        filterData = data;
    }

// not found error msg  

if(!filterData.length){
    not_found.classList.remove("d-none");
    table.classList.add("d-none");
}
else{
    not_found.classList.add("d-none");
    table.classList.remove("d-none");
}

    putData(filterData);
}