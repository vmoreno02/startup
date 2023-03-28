function login() {
    const name = document.querySelector("#usernameinput");
    const pass = document.querySelector("#passwordinput");
    const email = document.querySelector("#emailinput");

    checkInput(name.value, pass.value, email.value);
}

function checkInput(name, pass, email) {
    debugger
    if (!(name.length) || !(pass.length) || !(email.length)) {
        const alert = document.getElementById('loginalert');
        alert.style.visibility = "visible";
    }

    else {
        const alert = document.getElementById('loginalert');
        alert.style.visibility = "hidden";

        localStorage.setItem("username", name);
        localStorage.setItem("password", pass);
        localStorage.setItem("email", email);

        window.location.href = "home.html";
    }
}