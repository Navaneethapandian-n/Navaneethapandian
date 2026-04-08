function togglePassword() {
    let pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (username === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    if (username === savedUser && password === savedPass) {
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password!");
    }
}
  


