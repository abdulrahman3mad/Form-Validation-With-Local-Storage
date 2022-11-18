loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrorMessages();

    let errors = checkIsValidForm();
    if (errors.length) {
        displayErrors(errors);
        return;
    }

    errors = checkIsRegistered();
    errors.length ? displayErrors(errors): window.location.replace("home.html");
})

