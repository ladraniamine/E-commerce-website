let userDom = document.getElementById("user");
let userInfo = document.getElementById("user-info");
let links = document.getElementById("links");

let singout = document.getElementById("singout");

if(localStorage.getItem('username')){
    links.remove()
    userInfo.style.display="flex"
    userDom.innerHTML = localStorage.getItem("username")
}
singout.addEventListener("click",()=>{
localStorage.clear();
setTimeout(()=>{
window.location = "register.html";
},1500)
})