
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrorMessages();

    // check if it's a valid inputs
    let errors = checkIsValidForm();
    if (errors.length) {
        displayErrors(errors);
        return;
    };

    // check if already exists
    errors = checkIsRegistered()
    if (!errors.length) {
        document.getElementById("upper-bar-message").innerHTML = "<p>This Email already exists! <a href='login.html'>Sign in</a></p>";
        return;
    }
    
    // register
    let user = {
        name: userName.value,
        email: email.value,
        password: password.value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    window.location.replace("login.html");
})
