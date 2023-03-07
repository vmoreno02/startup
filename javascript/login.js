function login() {
    const name = document.querySelector("#usernameinput");
    localStorage.setItem("username", name.value);
    
    const pass = document.querySelector("#passwordinput");
    localStorage.setItem("password", pass.value);

    const email = document.querySelector("#emailinput");
    localStorage.setItem("email", email.value);

    window.location.href = "home.html";
}