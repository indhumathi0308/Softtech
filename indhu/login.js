let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}




const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const pass_error = document.getElementById("pass_error");

form.addEventListener('submit', (e) => {
    var email_check = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.[A-Za-z]{2,4}$/;
    let isValid = true;



    // User name validation
    if (username.value === '' || username.value === null) {
        name_error.innerHTML = " Name is required ";
        username.focus();
        isValid = false;
    } else {
        name_error.innerHTML = "";
    }

    // Email validation
    if (!email.value.match(email_check)) {
        email_error.innerHTML = "Valid Email is required";
        if (isValid) {
            email.focus();
        }
        isValid = false;
    } else {
        email_error.innerHTML = "";
    }

    // Password validation
    if (password.value.length <= 5) {
        pass_error.innerHTML = "Password must be more than 6 characters";
        if (isValid) {
            password.focus();
        }
        isValid = false;

    } else if (password.value.length >= 20) {
        pass_error.innerHTML = "Password cannot be more than 20 characters";
        if (isValid) {
            password.focus();
        }
        isValid = false;
    }
    else if (password.value === 'password' || password.value === 'indhumathi') {
        pass_error.innerHTML = "Password cannot be 'password'";
        if (isValid) {
            password.focus();
        }
        isValid = false;
    } else {
        pass_error.innerHTML = "";
    }

    // return isValid

    if (!isValid) {
        e.preventDefault();
    } else {
        console.log({
            "usernam": username.value,
            "Email": email.value,
            "password": password.value,
        });
        alert("Form submitted successfully!");
    }
});
