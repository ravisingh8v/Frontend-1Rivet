const data = [
    {
        name: "Skipy Peanut Butter 160z ",
        date: "07 Nov, 8:35pm",
        type: "Discarded",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "A Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Want",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Cancelled",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Waiting",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Discarded",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Discarded",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Want",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Want",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Waiting",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Cancelled",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
    {
        name: "Skipy Peanut Butter 160z",
        date: "07 Nov, 8:35pm",
        type: "Discarded",
        EstCost: "$40.27",
        last: "18 Aug",
        list: "Grocery",
        auto: "No",
        buy: "Amazone"
    },
];




putData(data);

function putData(data) {
    let tbody = document.querySelector("#tbody");

    data.forEach((user) => {
        let tr = document.createElement("tr");
        //    console.log(tr);
        for (const key in user) {
            if (["name", "date", "type", "EstCost", "last", "list", "auto", "buy"].includes(key)) {
                // console.log(td);
                const element = user[key];
                let td = document.createElement("td");
                if (key === "type") {
                    const span = document.createElement("span");
                    span.classList.add("bedge");
                    span.textContent = user[key];

                    if (user[key] === "Discarded") {
                        span.classList.add("discard");
                    }
                    if (user[key] === "Want") {
                        span.classList.add("want");
                    }
                    if (user[key] === "Cancelled") {
                        span.classList.add("cancel");
                    }
                    if (user[key] === "Waiting") {
                        span.classList.add("wait");
                    }
                    td.appendChild(span)
                }else{
                    td.textContent = element;
                }
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
    const tableBody = document.getElementById("tbody");
    const searchBox = document.getElementById("myInput");
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

    if (!filterData.length) {
        not_found.classList.remove("d-none");
        table.classList.add("d-none");
    }
    else {
        not_found.classList.add("d-none");
        table.classList.remove("d-none");
    }

    putData(filterData);
}