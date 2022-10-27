let username = document.getElementById("username");
let password = document.getElementById("password");
let signin = document.getElementById("sign-in")

let getusername= localStorage.getItem("username");
let getpassword= localStorage.getItem("password");

signin.addEventListener("click",(eo)=>{
eo.preventDefault();
if(username.value===""||password.value===""){
    alert("pleas file data");
    console.log("wrong");
}

else if((getusername && getusername===localStorage.getItem("username"))&&(getpassword&& getpassword ===localStorage.getItem("password"))){
setTimeout(()=>{
    window.location = "index.html"
},1500)
}else{
    alert("the password is incorect");
}
});