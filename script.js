/*document.getElementById('login-Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('logInUsername').value.trim();
    const email = document.getElementById('logInEmail').value.trim();
    const password = document.getElementById('logInPassword').value.trim();
    const Password= document.getElementById('confirmPassword').value.trim();
    const errorMessage = document.getElementById('logInError');

    errorMessage.textContent = '';

    if (username=== ' ' || email === '' || password === '' || Password === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Invalid email format.';
        return;
    }
    if(password!==Password){
        errorMessage.textContent= 'password does not match';
        return;
    }

    // Add more log-in validations if necessary

    console.log('Log-in successful');
    // Submit the form or further processing
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}*/
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const ConfirmPassword = document.getElementById("confirmPassword").value;

    if (username === "" || password === "" || ConfirmPassword === "") {
        alert("All fields are required.");
        return;
    }

    if (password !== ConfirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // You would normally send this data to a server for registration.
    alert("Sign-up successful!");
    document.getElementById("login-username").value = username;
    document.getElementById("login-password").value = password;

    // Show the login form
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

function login() {
    // You would normally validate login credentials and handle this on the server.
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;

    if (loginUsername === "user" && loginPassword === "password") {
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("user-display").textContent = loginUsername;
    } else {
        alert("Invalid login credentials.");
    }
}

/*function navigateDashboard() {
    const selectedOption = document.getElementById("dropdown-menu").value;
    alert("Navigating to " + selectedOption);
}*/