(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('username');
    if (userName) {
      const nameEl = document.querySelector('#usernameinput');
      nameEl.value = userName;
      const user = await getUser(nameEl.value);
      authenticated = user?.authenticated;
    }
})();

async function login() {
//     const name = document.querySelector("#usernameinput");
//     const pass = document.querySelector("#passwordinput");
//     const email = document.querySelector("#emailinput");

//     checkInput(name.value, pass.value, email.value);

    loginOrCreate(`api/auth/login`);
}

async function signUp() {
    loginOrCreate(`api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#usernameinput')?.value;
    const password = document.querySelector('#passwordinput')?.value;
    const email = document.querySelector("#emailinput")?.value;

    console.log(email);

    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password, email: email }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const body = await response.json();
  
    if (response?.status === 200) {
      localStorage.setItem('username', userName);
      window.location.href = 'home.html';
    } else {
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
    }
}

function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
}

async function getUser(username) {
    const response = await fetch(`/api/user/${username}`);
    if (response.status === 200) {
        return response.json();
    }

    return null;
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