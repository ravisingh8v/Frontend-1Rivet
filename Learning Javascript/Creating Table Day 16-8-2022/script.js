const users = [{
    "Id":1,
    "Name":"Ravi",
    "Suranme":"Singh",
    "Designation":"Frontend Dev",
    "Email":"ravisi37637@gmail.com"
},
    {
    "Id":2,
    "Name":"Suraj",
    "Suranme":"Singh",
    "Designation":"Backend",
    "Email":"surajwr765@gmail.com"
},
    {
    "Id":3,
    "Name":"Saurabh",
    "Suranme":"Yadav",
    "Designation":"Teahcer",
    "Email":"Saurabh264@gmail.com"
},
    {
    "Id":4,
    "Name":"samkeet",
    "Suranme":"kewat",
    "Designation":"frontend",
    "Email":"samkeet@gmail.com"
},
    {
    "Id":5,
    "Name":"Sahil",
    "Suranme":"Khan",
    "Designation":"QA",
    "Email":"shahilkw78@gmail.com"
},
{
    "Id":6,
    "Name":"Ramesh",
    "Suranme":"Varma",
    "Designation":"Software Dev",
    "Email":"ramesh463@gmail.com",
},
{
    "Id":7,
    "Name":"Ramesh",
    "Suranme":"Varma",
    "Designation":"Software Dev",
    "Email":"ramesh463@gmail.com",
    "pass":"ramesh463@gmail.com",
},
];
// const users=[];

getData(users);
    // adding data in table 
function getData(data){
    const tbody=document.querySelector("#tbody");
    // console.log(tbody);
    data.forEach((users) => {
        const tableRow=document.createElement("tr");
        console.log(tableRow);

        for(const items in users){
            if(['Id','Name','Suranme','Designation','Email'].includes(items)){

            
            const value=users[items];
            const tableCol = document.createElement("td");
            tableCol.textContent=value;
            tableRow.appendChild(tableCol);

        }
        }
    tbody.appendChild(tableRow);
});
}



//   filter 

    function onKey() {
        const userTableBody = document.querySelector('#tbody'); /** get user tbody */
        const searchTerm = document.querySelector('#myInput');
        const noRecordDiv = document.querySelector('.not-found');
        const userTable = document.querySelector('#myTable');
        userTableBody.textContent = '';

        let filteredData = [];
      
        if (searchTerm.value !== '') {
          filteredData = users.filter((item) => {
            return item.Name.toLowerCase().includes(searchTerm.value.toLowerCase());
          });
        } else {
          filteredData = users;
        }
      
        // filteredData = searchTerm.value !== '' ? userList.filter(item => item.name.toLowerCase().includes(searchTerm.value.toLowerCase())) : userList;
        
        if (!filteredData.length) {
          userTable.classList.add('d-none');
          noRecordDiv.classList.remove('d-none');
        } else {
          userTable.classList.remove('d-none');
          noRecordDiv.classList.add('d-none');
        }
        getData(filteredData);
      }

    // pop - up 

function myfuntion(){
    var popUp = document.getElementById('pop-up');
    popUp.classList.toggle("d-none")
}






