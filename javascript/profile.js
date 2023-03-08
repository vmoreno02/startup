function setName() {
    const name = localStorage.getItem('username') ?? 'Midoriya Izuku';
    const nameEl = document.getElementById("profile-username");
    nameEl.textContent = name;
}

function saveProfile() {
    const name = document.querySelector("#profile-username-set");
    const pass = document.querySelector("#profile-password-set");
    
    if (name && name.value.trim().length) {
        localStorage.setItem("username", name.value);
        setName();
    }

    if (pass && pass.value.trim().length) {
        localStorage.setItem("password", pass.value);
    }
}

function loadFavorites() {}

setName();