const pages = [
    { title: "My Neighbor Totoro" },
    { title: "Spirited Away" },
    { title: "The Cat Returns" },
    { title: "Howl's Moving Castle" },
    { title: "Castle in the Sky" },
    { title: "Princess Mononoke" },
    { title: "Kiki's Delivery Service" },
    { title: "Nausicaa of the Valley of the Wind" },
    { title: "Ponyo" },
]

let list = document.querySelector(".results-list");

const searchInput = document.querySelector('.searchbar');
searchInput.addEventListener("input", (e) => {
    clearList();

    let value = e.target.value;
    if (value && value.trim().length) {
        value = value.trim().toLowerCase();
        setList(pages.filter(movie => {
            let lowerMovie = movie.title.toLowerCase();
            return lowerMovie.includes(value);
        }));
    }
});

function setList(results) {
    for (const movie of results) {
        const resultItem = document.createElement('li');
        resultItem.classList.add('result-item');
        resultItem.classList.add('list-group-item');
        resultItem.classList.add('list-group-item-action');

        const text = document.createTextNode(movie.title);
        debugger 
        setLink(resultItem, text);
        //resultItem.appendChild(text);
        list.appendChild(resultItem);
    }

    if (results.length === 0) {
        noResults();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function noResults() {
    const error = document.createElement('li');
    error.classList.add('error-message');
    error.classList.add('list-group-item');
    error.classList.add('list-group-item-action');

    const text = document.createTextNode('No results');
    error.appendChild(text);
    list.appendChild(error);
}

function setLink(item, text) {
    if (text.data === "My Neighbor Totoro") {
        item.innerHTML = '<a href="totoro.html">' + text.data + '</a>';
    }
    else if (text.data === "Spirited Away") {
        item.innerHTML = '<a href="spiritedaway.html">' + text.data + '</a>';
    }
    else if (text.data === "The Cat Returns") {
        item.innerHTML = '<a href="thecatreturns.html">' + text.data + '</a>';
    }
    else if (text.data === "Howl's Moving Castle") {
        item.innerHTML = '<a href="howlsmovingcastle.html">' + text.data + '</a>';
    }
    else if (text.data === "Castle in the Sky") {
        item.innerHTML = '<a href="castleinthesky.html">' + text.data + '</a>';
    }
    else if (text.data === "Princess Mononoke") {
        item.innerHTML = '<a href="mononoke.html">' + text.data + '</a>';
    }
    else if (text.data === "Kiki's Delivery Service") {
        item.innerHTML = '<a href="kiki.html">' + text.data + '</a>';
    }
    else if (text.data === "Nausicaa of the Valley of the Wind") {
        item.innerHTML = '<a href="nausicaa.html">' + text.data + '</a>';
    }
    else {
        item.innerHTML = '<a href="ponyo.html">' + text.data + '</a>';
    }
}