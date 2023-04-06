function setName() {
    const name = localStorage.getItem('username') ?? 'Midoriya Izuku';
    const nameEl = document.getElementById("profile-username");
    nameEl.textContent = name;
}

function saveProfile() {
    const name = document.querySelector("#profile-username-set");
    const pass = document.querySelector("#profile-password-set");
    
    if (name && name.value.trim().length) {
        updateUsername(name.value);
    }

    if (pass && pass.value.trim().length) {
        updatePassword(pass.value);
    }
}

async function updateUsername(username) {
    const response = await fetch(`api/change/username`, {
        method: 'post',
        body: JSON.stringify({ olduser: localStorage.getItem('username'), newuser: username }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
  
    if (response?.status === 200) {
        localStorage.setItem("username", username);
        setName();
    }
    else {
        console.log("error in change username");
    }
}

async function updatePassword(password) {
    const response = await fetch(`api/change/password`, {
        method: 'post',
        body: JSON.stringify({username: localStorage.getItem('username'), newpass: password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response?.status !== 200) {
        console.log("error in change password");
    }
}

function loadFavorites() {
    debugger
    const list = document.querySelector("#favorites");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    
    let faves = [];

    const favesText = localStorage.getItem('faves');
    if (favesText) {
        faves = JSON.parse(favesText);
    }

    if (faves.length) {
        for (const movie of faves.entries()) {
            const item = document.createElement("li");
            item.classList.add('list-group-item');
            item.classList.add('list-group-item-action');
            console.log(movie[1]);
            const text = document.createTextNode(movie[1].title);

            item.appendChild(text);
            list.appendChild(item);
        }
    }

    else {
        const item = document.createElement("li")
        item.classList.add('list-group-item');
        item.classList.add('list-group-item-action');
        const text = document.createTextNode("No favorites yet");

        item.appendChild(text);
        list.appendChild(item);
    }
}

setName();
loadFavorites();