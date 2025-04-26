let isEmail = true;
function SwitchInputType(){
    const inputType = document.getElementById("input-type-btn");
    const label = document.getElementById("inputLabel");
    const inputText = document.getElementById("userInput");
    const error = document.getElementById("inputError");

    if (isEmail) {
        label.textContent = "Phone Number";
        inputText.type = "tel";
        inputText.placeholder = "Enter your phone number";
        inputType.textContent = "Use email address";
    }
    else {
        label.textContent = "Email Address";
        inputText.type = "email";
        inputText.placeholder = "Enter your email address";
        inputType.textContent = "Use phone number";
    }
    error.textContent = "";
    inputText.value = "";
    isEmail = !isEmail;
}

function ShowPassword(){
    const passwordText = document.getElementById("password1");
    const passwordBtn = document.getElementsByClassName("show-button1");
    if (passwordText.type === "password") {
        passwordText.type = "text";
        passwordBtn[0].textContent = "Hide password";
    }
    else {
        passwordText.type = "password";
        passwordBtn[0].textContent = "Show password";
    }
}

function ShowPassword2(){
    const passwordText = document.getElementById("password2");
    const passwordBtn = document.getElementsByClassName("show-button2");
    if (passwordText.type === "password") {
        passwordText.type = "text";
        passwordBtn[1].textContent = "Hide password";
    }
    else {
        passwordText.type = "password";
        passwordBtn[1].textContent = "Show password";
    }
}

function CheckUserInfo(){
    const inputText = document.getElementById("userInput").value.trim();
    const passwordText = document.getElementById("password1").value.trim();
    const passwordText2 = document.getElementById("password2").value.trim();
    const error_username = document.getElementById("inputError1");
    const error_password = document.getElementById("inputError2");
    if (isEmail) {
        if (inputText === "") {
            error_username.textContent = "Please enter your email address.";
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(inputText)) {
            error_username.textContent = "Please enter a valid email address.";
            return;
        }
    }
    else {
        if (inputText === "") {
            error_username.textContent = "Please enter your phone number.";
            return;
        }
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(inputText)) {
            error_username.textContent = "Please enter a valid phone number.";
            return;
        }
    }

    error_username.textContent = "";

    if (passwordText === "") {
        error_password.textContent = "Please enter your password.";
        return;
    }

    if (passwordText.length < 8) {
        error_password.textContent = "Password must be at least 8 characters long.";
        return;
    }

    if (/[a-zA-Z]/.test(passwordText) === false) {
        error_password.textContent = "Password must contain at least one letter.";
        return;
    }

    if (/[0-9!@#\$]/.test(passwordText) === false) {
        error_password.textContent = "Password must contain at least one number or special character.";
        return;
    }

    if (passwordText2 === "") {
        error_password.textContent = "Please confirm your password.";
        return;
    }

    if (passwordText !== passwordText2) {
        error_password.textContent = "Passwords do not match.";
        return;
    }

    error_password.textContent = "";
}