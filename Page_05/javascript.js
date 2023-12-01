function validation(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;
    var error_message = document.getElementById("error_message")
    var text;
    error_message.style.padding = "10px";
    if(name.length < 5){
        text = "Please enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 8) {
        text = "Please Enter a Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (!email.includes("@") || email.length < 6){
        text = "Please Enter a Valid Email Address";
        error_message.innerHTML = text;
        return false;
    }
    if (msg.length <= 30){
        text = "Please enter More than 30 Characters";
        error_message.innerHTML = text;
        return false;
    }
    return true;
}
