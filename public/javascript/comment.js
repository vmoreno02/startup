
window.onload = function setTemplate() {
    document.getElementById('allComments').innerHTML = localStorage.getItem('template');
    localStorage.clear();
};

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    debugger
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    
    // div to be appended
    wrapDiv = document.createElement('div');
    wrapDiv.className = 'wrapper';
    wrapDiv.style.marginLeft = 1;

    // username
    const userDiv = document.createElement('div');
    userDiv.className = 'userDiv';
    userDiv.innerHTML = "username";

    // get the new comment
    commentText = document.getElementById('comment').value;

    // add comment box to null
    document.getElementById('comment').value = '';

    // set up text box to be appended
    textBox.innerHTML = commentText;

    // append
    wrapDiv.append(userDiv);
    wrapDiv.append(textBox);
    commentContainer.appendChild(wrapDiv);

    br = document.createElement('br');
    commentContainer.appendChild(br);

    setOnLocalStorage();
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

// TODO: store comments in db (api call)
async function saveComments(commentText) {
    pageTitle = document.querySelector("title");
    username = localStorage.getItem("username");

    comment = new MyComment(username, commentText);
    // call fetch api method to store comment
}

class MyComment {
    constructor(username, commentText) {
        this.username = username;
        this.commentText = commentText;
    }
}

localStorage.clear();