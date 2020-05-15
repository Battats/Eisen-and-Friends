function passwordVerify() {
    ret = true;
    password = document.getElementById("password");

    // TODO - make this look nicer
    document.getElementById("lower").classList = ["alert"]
    document.getElementById("capital").classList = ["alert"]
    document.getElementById("number").classList = ["alert"]
    document.getElementById("length").classList = ["alert"]
    

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;


    if(password.value.length < 8) {
        ret = false;
        document.getElementById("length").classList.add("alert-danger")
    }
    else {
        document.getElementById("length").classList.add("alert-success")
    }

    if(!password.value.match(lowerCaseLetters)){ 
        ret = false;
        document.getElementById("lower").classList.add("alert-danger");
    }
    else {
        document.getElementById("lower").classList.add("alert-success");
    }

    if(!password.value.match(upperCaseLetters)){ 
        ret = false;
        document.getElementById("capital").classList.add("alert-danger");
    }
    else {
        document.getElementById("capital").classList.add("alert-success");
    }
    
    if(!password.value.match(numbers)){ 
        ret = false;
        document.getElementById("number").classList.add("alert-danger");
    }
    else {
        document.getElementById("number").classList.add("alert-success");
    }
    return ret;
}

function matchPassword() {
    password=document.getElementById("password")
    confirm_password= document.getElementById("confirm_password")

    if(password.value != confirm_password.value) {
        confirm_password.classList.add("is-invalid")
        confirm_password.classList.remove("is-valid")
        return false;
    }
    else 
    {
        confirm_password.classList.add("is-valid")
        confirm_password.classList.remove("is-invalid")
        return false;
    }
    
}



function validateForm() {

    return  matchPassword() & passwordVerify()
}