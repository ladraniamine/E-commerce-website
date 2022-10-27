let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUp = document.getElementById("sing-up");

signUp.addEventListener("click",(eo)=> {
eo.preventDefault();
if(username.value===""||email.value===""||password.value===""){
    alert("pleas file data");
}
else{
    localStorage.setItem('username',username.value)
    localStorage.setItem('email',email.value)
    localStorage.setItem('password',password.value)
    setTimeout(()=>{
        window.location="login.html";
    },1500)

}


});