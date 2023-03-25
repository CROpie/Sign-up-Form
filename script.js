submit_button = document.querySelector("#submit-button");
password1 = document.querySelector("#password-input");
password2 = document.querySelector("#password2-input");
password2 = document.querySelector("#password2-input");

submit_button.addEventListener("click", checkPassword);

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