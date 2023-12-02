var x = document.getElementById("Sign_In");
var y = document.getElementById("Sign_Up");
var z = document.getElementById("btn");

function Sign_Up(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "calc(50% - 15px)";
}

function Sign_In(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function validateSignIn() {
    var username = document.getElementById("name_sign_in").value;
    var password = document.getElementById("password_sign_in").value;
    var error_message = document.getElementById("error_message_sign_in");

    error_message.innerHTML = "";

    if (username === "" || username.length<6) {
        error_message.innerHTML = "Please enter your username.";
        return false;
    } 
    if (password === "") {
        error_message.innerHTML = "Please enter your password.";
        return false;
    }
    return true;
}

function validateSignUp() {
    var name = document.getElementById("name_sign_up").value;
    var email = document.getElementById("email_sign_up").value;
    var password = document.getElementById("password_sign_up").value;
    var confirm_password = document.getElementById("cfm_password_sign_up").value;
    var error_message = document.getElementById("error_message_sign_up");

    error_message.innerHTML = "";

    if (name === "" || name.length<6) {
        error_message.innerHTML = "Please enter your full name.";
        return false;
    } 

    if (email === "") {
        error_message.innerHTML = "Please enter your email address.";
        return false;
    }

    if (password.length < 8) {
        error_message.innerHTML = "Password must be at least 8 characters long.";
        return false;
    }

    if (confirm_password === "" || confirm_password !== password) {
        error_message.innerHTML = "Passwords do not match.";
        return false;
    } 

    return true;
}
