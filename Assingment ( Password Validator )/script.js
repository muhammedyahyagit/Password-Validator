function validatePassword() {
    let password = prompt("Enter your password:");
    let isValid = true;
    let errorMessage = "Password is invalid due to:\n";

    if (password.length < 6) {
        isValid = false;
        errorMessage += "- It must be at least 6 characters long.\n";
    }

    if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
        isValid = false;
        errorMessage += "- It must contain both letters and numbers.\n";
    }

    if (isValid) {
        alert("Password is valid.");
    } else {
        alert(errorMessage);
    }
}

validatePassword();
