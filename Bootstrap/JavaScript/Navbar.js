var SignUp = document.getElementById("SignUp")
var Login = document.getElementById("Login")
var write = document.getElementById("write")
var flag = true
SignUp.addEventListener("click", function event(){
    if(flag){
        write.style.display = "block"
        flag = false;
    }
    else{
        write.style.display="none"
        flag = true;
    }
})
Login.addEventListener("click", function SignUp(){
if(!flag){
    write.style.display="none"
    flag = true; 
}

})