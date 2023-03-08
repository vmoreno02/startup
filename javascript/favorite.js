function addToFavorites(movie) {
  let faves = [];
  const favesText = localStorage.getItem('faves');
  if (favesText) {
    faves = JSON.parse(favesText);
  }
  const newFave = {title: movie};
  faves.push(newFave);
  localStorage.setItem('faves', JSON.stringify(faves));

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

  const btn = document.getElementById('like-label');
  btn.classList.add('btn-outline-secondary');
  btn.classList.remove('btn-success');
}

function saveState() {
  var cbstate;

  window.addEventListener('load', function() {
    cbstate = JSON.parse(this.localStorage['checkstate'] || '{}');

    for (var i in cbstate) {
      var el = document.querySelector('input[id="' + i + '"]');
      if (el) el.checked = true;
    }

    let cb = this.document.getElementsByClassName('btn-check');

    for(var i = 0; i < cb.length; i++) {
      cb[i].addEventListener('click', function(evt) {
        if (this.checked) {
          cbstate[this.name] = true;
        }

        else if (cbstate[this.name]) {
          delete cbstate[this.name];
        }

        localStorage.checkstate = JSON.stringify(cbstate);
      });
    }
  });
}

function changeFavorites(cb, movie) {
  if (cb.checked) {
    addToFavorites(movie);
  }

  else {
    removeFromFavorites(movie);
  }

  //saveState();
}