let a=[12,2,3,4,5,6];
// let b=['a','b','c','d'];


// filter method check the condition we given and print accordingly
// const c = a.filter((x)=>(x,x<=2));
// console.log(c);
// const [f] =a.entries();
// console.log(f);

// const obj1={
//     "name":"ravi",
//     "surname":"singh",
//     "age":21,
//     "age2":22,
// }
// a= obj1.name;
// console.error();


// Date Pickeer 
// const d = new Date();
// console.log(d);

// var currentDate = new Date();
//             var date = currentDate.getDate();
//             var month = currentDate.getMonth()+1;
//             var year = currentDate.getFullYear();
//             document.getElementById("Output1").innerHTML = (date + " / " + month + " / " + year + " ");

var ind = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
var aus = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});
var usa = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});


function change(){
    var country = document.getElementById("Time");
    var option = country.options[country.selectedIndex];

    var update = option.value;

    if(update=="IN"){
        document.getElementById("Output").innerHTML= ind;

    }
   



}


// function updateTime(){
// var ind = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
// document.getElementById("Output").innerHTML = ind + " (Indian Standard Time)"
// setTimeout(updateTime, 1000);
// }
