var user_emailid = document.forms['form']['user_emailid'];
var user_newpassword = document.forms['form']['user_newpassword'];
var user_password = document.forms['form']['user_password'];

// getting details

var email_error = document.getElementById('email_error');
var Password_Error = document.getElementById('Password_Error');
var Password_Matching = document.getElementById('Password_Matching');

function validated(){
    if(user_emailid.value.length<9){
        user_emailid.style.border="1px solid red"
        email_error.style.display="block";
        user_emailid.focus();
        return false;
    }
    if(user_newpassword.value.length<9){
        user_newpassword.style.border="1px solid red"
        Password_Error.style.display="block";
        user_newpassword.focus();
        return false;
    }
    if(user_password.value.length<9){
        user_password.style.border="1px solid red"
        Password_Matching.style.display="block";
        user_password.focus();
        return false;
}
}
user_emailid.addEventListener('textInput', email_verify);
user_newpassword.addEventListener('textInput', password_verify);
user_password.addEventListener('textInput', againpassword_verify);

function email_verify(){
    if(user_emailid.value.length>=8)
    user_emailid.style.border="1px solid green"
    email_error.style.display="none";
    return true;
}
function password_verify(){
    if(user_newpassword.value.length>=8)
    user_newpassword.style.border="1px solid green"
    Password_Error.style.display="none";
    return true;
}
function againpassword_verify(){
    if(user_password.value.length>=8)
    user_password.style.border="1px solid green"
    Password_Matching.style.display="none";
    return true;
}


if(user_newpassword && user_password){
    
}