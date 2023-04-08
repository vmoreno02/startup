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

}

function saveState(movie, cb) {
  debugger
  let cbstate = [];
  const cbText = localStorage.getItem('cbstate');
  if (cbText) {
    cbstate = JSON.parse(cbText);
  }

  let found = false;
  for (let i = 0; i < cbstate.length; i++) {
    if (cbstate[i].title === movie) {
      found = true;
      cbstate[i].checked = cb;
      break;
    }
  }

  if (!found) {
    const newCB = {title: movie, checked: cb};
    cbstate.push(newCB);
  }

  localStorage.setItem('cbstate', JSON.stringify(cbstate));
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

function clearFavorites() {
  let list = [];
  localStorage.setItem('faves', JSON.stringify(list));
  localStorage.setItem('cbstate', JSON.stringify(list));
}

function changeFavorites(cb, movie) {
  if (cb.checked) {
    addToFavorites(movie);
  }

  else {
    removeFromFavorites(movie);
  }
}

//clearFavorites();
