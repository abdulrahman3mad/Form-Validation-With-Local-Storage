//DOM ELEMENTS 
let userName = document.getElementById("user-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let registerForm = document.getElementById("register-form");
let loginForm = document.getElementById("login-form");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let userNameError = document.getElementById("name-error");

// GENERAL FUNCTIONS 
function checkIsRegistered() {
    let errors = [];

    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email != email.value || !user) errors.push({ location: email, errorMessage: "this email doesn't exist" });
    if (user && user.password != password.value) errors.push({ location: password, errorMessage: "" });

    return errors;
}

function checkIsValidForm() {
    let errors = [];

    if(userName && userName.value.length < 6) errors.push({ location: userName, errorMessage: "user name should be at least 6 char" });
    if (!email.value.includes("@")) errors.push({ location: email, errorMessage: "Email should have @ symbol" });
    if (email.value == "") errors.push({ location: email, errorMessage: "Email shouldn't be empty!!" });
    if (password.value == "") errors.push({ location: password, errorMessage: "password shouldn't be empty!!" });

    return errors;
}

function displayErrors(errors) {
    errors.forEach((error) => {
        if (error.location == email) emailError.innerHTML = error.errorMessage;
        else if (error.location == password) passwordError.innerHTML = error.errorMessage;
        else if (error.location == userName) userNameError.innerHTML = error.errorMessage;
    })
}

function clearErrorMessages(){
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    if(userNameError) userNameError.innerHTML = "";
}