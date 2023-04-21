var user_name = document.forms['form']['user_name'];
var user_password = document.forms['form']['user_password'];

var name_error = document.getElementById('name_error');
var password_error = document.getElementById('password_error');

function validated(){
    if(user_name.value.length<9){
        user_name.style.border="1px solid red"
        name_error.style.display="block";
        user_name.focus();
        return false;
    }
   
        if(user_password.value.length<9){
            user_password.style.border="1px solid red"
            password_error.style.display="block";
            user_password.focus();
            return false;
        }
}

user_name.addEventListener('textInput', name_verify);
user_password.addEventListener('textInput', password_verify);


function name_verify(){
    if(user_name.value.length>=8)
    user_name.style.border="1px solid green"
    name_error.style.display="none";
    return true;
}

function password_verify(){
    if(user_password.value.length>=8)
    user_password.style.border="1px solid green"
    password_error.style.display="none";
    return true;
}