// event for websocket
const addFave = "addFave";
const removeFave = "removeFave";
let socket;
let socket_size = 0;
configureWebSocket();

async function addToFavorites(movie) {
  const response = await fetch(`api/favorites/add`, {
    method: "post",
    body: JSON.stringify({ username: localStorage.getItem('username'), favorite: movie }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
  });  

  if (response?.status === 200) {
    const btn = document.getElementById('like-label');
    btn.classList.remove('btn-outline-secondary');
    btn.classList.add('btn-success');
  }
  else {
    console.log("error in set favorite");
    console.log(response.msg);
  }

  broadcastEvent(localStorage.getItem('username'), addFave, movie);
}

async function removeFromFavorites(movie) {
  const response = await fetch(`api/favorites/remove`, {
    method: "post",
    body: JSON.stringify({ username: localStorage.getItem('username'), favorite: movie }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response?.status === 200) {
    const btn = document.getElementById('like-label');
    btn.classList.add('btn-outline-secondary');
    btn.classList.remove('btn-success');
  }
  else {
    console.log("error in remove favorite");
    console.log(response.msg);
  }

  broadcastEvent(localStorage.getItem('username'), removeFave, movie);
}

async function loadState(movie) {
  const response = await fetch(`api/favorites/get`, {
    method: "post",
    body: JSON.stringify({ username: localStorage.getItem('username') }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
  });  
  const faves = await response.json();

  const cb = faves.includes(movie);

  const btn = document.querySelector('.like-label');
  if (cb) {
    btn.classList.remove('btn-outline-secondary');
    btn.classList.add('btn-success');
    document.getElementById('btn-check').checked = true;
  }
  else {
    btn.classList.add('btn-outline-secondary');
    btn.classList.remove('btn-success');
    document.getElementById('btn-check').checked = false;
  }
}

function changeFavorites(cb, movie) {
  if (cb.checked) {
    addToFavorites(movie);
  }

  else {
    removeFromFavorites(movie);
  }
}

// Functionality for peer communication using WebSocket

function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  socket.onopen = (event) => {
    displayMsg('system', 'page', 'connected');
  };
  socket.onclose = (event) => {
    displayMsg('system', 'page', 'disconnected');
  };
  socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === addFave) {
      displayMsg('add', msg.from, `added ${msg.value}`);
    } else if (msg.type === removeFave) {
      displayMsg('remove', msg.from, `removed ${msg.value}`);
    }
  };
}

function displayMsg(cls, from, msg) {
  const chatText = document.querySelector('#messages');
  if (socket_size >= 5) {
    socket_size = 1;
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` ;
  }
  else {
    socket_size += 1;
    chatText.innerHTML =
        `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }
}

function broadcastEvent(from, type, value) {
  const event = {
    from: from,
    type: type,
    value: value,
  };
  socket.send(JSON.stringify(event));
}
