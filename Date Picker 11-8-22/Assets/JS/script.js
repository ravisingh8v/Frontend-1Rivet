// function update(){setTimeout(update,1000);}


// function onload(){
//     var ind = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});

//     document.getElementById("output2").innerHTML=ind;
// setTimeout(onload,1000);
// }

// function onload(){
//     var ind2 = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
//     document.getElementById("output").innerHTML=ind2;
//     setTimeout(onload,1000)
// }


setInterval( function change(){
    var country = document.getElementById("country");
    var option = country.options[country.selectedIndex];
    var update = option.value;

    var t=new Date();
    var ind = t.toLocaleString("en-US",{timeZone: "Asia/Kolkata"});
    var usa = t.toLocaleString("en-US", {timeZone: "America/Chicago"});
    var aus = t.toLocaleString("en-US", {timeZone: "Australia/Sydney"});

    if (update =="ind"){
            document.getElementById("output").innerHTML=ind;
    } 
    else if (update=="usa"){
        document.getElementById("output").innerHTML = usa;
    }
    else if(update=="aus"){
        document.getElementById("output").innerHTML = aus;
    }
},1000)
