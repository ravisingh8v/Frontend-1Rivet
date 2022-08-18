let signI = document.querySelector(".sign-in");
let logO = document.querySelector(".logout");
let isAuth = localStorage.setItem("isAuthenticate",false);


function signIn(){
    debugger
    localStorage.setItem("isAuthenticate",true);
    signI.classList.add("d-none");
    logO.classList.remove("d-none")
}
function logOut(){
    localStorage.setItem("isAuthenticate",false);
    logO.classList.add("d-none");
    signI.classList.remove("d-none");
}
