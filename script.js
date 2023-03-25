submit_button = document.querySelector("#submit-button");
password1 = document.querySelector("#password-input");
password2 = document.querySelector("#password2-input");
password2 = document.querySelector("#password2-input");

submit_button.addEventListener("click", checkPassword);

password1.addEventListener("change", checkEmpty);
password2.addEventListener("change", checkEmpty);

function checkPassword() {
    if (password1.value === password2.value) {
        alert("no problems");
        return false;
    } else {
        document.querySelector("#error-message").style.visibility = "visible";
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
        return false;
    }
}

function checkEmpty() {
    if (!password1.value) {
        password1.style.borderColor = "lightgrey";
    }
    if (!password2.value) {
        password2.style.borderColor = "lightgrey";
    }
}