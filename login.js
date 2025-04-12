const Username = "goku";
const Password = "goku@123";

document.getElementById('login-card').addEventListener('submit', function(event) { 
    event.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    if (enteredUsername === Username && enteredPassword === Password) {
        alert("Login Successful!");
        window.location.href = "demo.html";
    } else {
        alert("Wrong Credentials!");
    }
});