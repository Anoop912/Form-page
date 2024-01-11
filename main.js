const form = document.getElementById("form")
const username = document.getElementById("username")
const Email = document.getElementById("Email")
const password = document.getElementById("password")
const passwordconfirm = document.getElementById("passwordconfirm")
const button = document.querySelector("button")
 
username.addEventListener("input",validationusername)
Email.addEventListener("input",validationEmail)
password.addEventListener("input",validationpassword)
passwordconfirm.addEventListener("input",validationpasswordconfirm)


function validationusername(){
    const usernamevalue = username.value.trim();
    if(usernamevalue === ""){
        setErrorFor(username,"meassage cannot be empty")
        return false;
    } else{
        setsuccessFor(username);
        return true;
    }
}

function validationEmail(){
    const  Emailvalue = Email.value.trim();
    if(Emailvalue===""){
        setErrorFor(Email,"meassage cannot be empty")
        return false;
    }
    else{
        setsuccessFor(Email)
        return true;
    }
}
function validationpassword(){
    const passwordvalue = password.value.trim();
    if(passwordvalue === ""){
        setErrorFor(password,"meassage cannot be empty");
        return false;
    } else{
        setsuccessFor(password);
        return true;
    }
}

function validationpasswordconfirm(){
    const passwordvalue = password.value.trim();
    const passwordconfirmvalue = passwordconfirm.value.trim();
    if(passwordconfirmvalue === ""){
        setErrorFor(passwordconfirmvalue,"meassage cannot be empty")
        return false;
    }
    else if(passwordvalue !== passwordconfirmvalue){
        setErrorFor(passwordconfirm,"password is not matching")
        return false;
    }
    else{
        setsuccessFor(passwordconfirm);
        return true;
    }
}
function setErrorFor(input,message){
       const inputcontrol = input.parentElement;
       const small = document.querySelector("small")
       
       small.innerHTML = message;
       inputcontrol.classList.remove("success");
       inputcontrol.classList.add("error");
}
function setsuccessFor(input){
    const inputcontrol = input.parentElement;
    
    inputcontrol.classList.remove("error");
    inputcontrol.classList.add("success");
}
