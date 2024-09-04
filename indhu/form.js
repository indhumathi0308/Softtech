let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}



const form=document.getElementById("form");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const dob=document.getElementById("dob");
const email=document.getElementById("email");
const role=document.getElementById("role");
const file=document.getElementById("file");

const fname_error=document.getElementById("fname_error");
const lname_error=document.getElementById("lname_error");
const dob_error=document.getElementById("dob_error");
const email_error=document.getElementById("email_error");
const role_error=document.getElementById("role_error");
const file_error=document.getElementById("file_error")
function validation(e){
    
    let isValid=true;

    //fname validation
    if(fname.value ===''|| fname.value===null){
        fname_error.innerHTML="enter the first name";
        fname.focus();
        isValid=false;
    }
    else {
        fname_error.innerHTML = "";
    }

    //lname validation
    if(lname.value===''||lname.value===null){
        lname_error.innerHTML="enter the last name";
        if (isValid) {
            lname.focus();
        }
        isValid=false;
    }
    else {
        lname_error.innerHTML="";
    }

    //date of birth validation
    if(dob.value===''||dob.value===null){
        dob_error.innerHTML="enter the date of birth";
        if (isValid) {
            dob.focus();
        }
        isValid=false;
    }
    else {
        dob_error.innerHTML="";
    }

//email validation
    var email_check = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.[A-Za-z]{2,4}$/;
    if(!email.value.match(email_check)){
        email_error.innerHTML="enter the email id";
        if (isValid) {
            email.focus();
            email.style.border="1px red solid"
        }
        isValid=false;
    }
    else {
        email_error.innerHTML="";
    }

    // select validation
    if(role.value ===''|| role.value===null || role.value === "please Select"){
        role_error.innerHTML="select a role";
        if (isValid) {
            role.focus();
        }
        isValid=false;
    }
    else {
     role_error.innerHTML = "";
    }
    //file validation
    if(file.value ===''|| file.value===null){
        file_error.innerHTML="select a file";
        if (isValid) {
            file.focus();
            file.style.border="1px red solid"
        }
        isValid=false;
    }
    else {
     file_error.innerHTML = "";
    }


    if (!isValid) {
        e.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }

};