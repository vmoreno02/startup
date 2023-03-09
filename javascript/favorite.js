function addToFavorites(movie) {
  debugger
  let faves = [];
  const favesText = localStorage.getItem('faves');
  if (favesText) {
    faves = JSON.parse(favesText);
  }

  let found = false;
  for (let i = 0; i < faves.length; i++) {
    if (faves[i].title === movie) {
      found = true;
      break;
    }
  }

  if (!found) {
    const newFave = {title: movie};
    faves.push(newFave);
    localStorage.setItem('faves', JSON.stringify(faves));
  }

  saveState(movie, true);

  const btn = document.getElementById('like-label');
  btn.classList.remove('btn-outline-secondary');
  btn.classList.add('btn-success');
}

function removeFromFavorites(movie) {
  let faves = [];
  const favesText = localStorage.getItem('faves');
  if (favesText) {
    faves = JSON.parse(favesText);
  }

  for (let i = 0; i < faves.length; i++) {
    if (faves[i].title === movie) {
      faves.splice(i, 1);
      break;
    }
  }

  localStorage.setItem('faves', JSON.stringify(faves));

  saveState(movie, false);

  const btn = document.getElementById('like-label');
  btn.classList.add('btn-outline-secondary');
  btn.classList.remove('btn-success');
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

function loadState(movie) {
  debugger
  let cbstate = [];
  const cbText = localStorage.getItem('cbstate');
  if (cbText) {
    cbstate = JSON.parse(cbText);
  }

  let found = false;
  let cb = false;
  for (let i = 0; i < cbstate.length; i++) {
    if (cbstate[i].title === movie) {
      found = true;
      cb = cbstate[i].checked;
      break;
    }
  }

  const btn = document.querySelector('.like-label');
  if (cb) {
    btn.classList.remove('btn-outline-secondary');
    btn.classList.add('btn-success');
  }
  else {
    btn.classList.add('btn-outline-secondary');
    btn.classList.remove('btn-success');
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
