function validateForm() {
    errors = [];
    password=document.getElementById("password").value
    confirm_password= document.getElementById("confirm_password").value

    if(password != confirm_password) {
        errors.push("הסיסמאות אינן תואמות")
    }

    if(errors.length==0)
    {
        return "";
    }
    else
    {
        return errors[0];
    }
}