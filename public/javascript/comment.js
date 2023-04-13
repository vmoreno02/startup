
window.onload = async function loadComments() {
    const response = await fetch(`api/comments/get`, {
        method: "post",
        body: JSON.stringify({ page: document.title }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const comments = await response.json();
    const commentContainer = document.getElementById('allComments');
    document.getElementById('allComments').innerHTML = "";

    for (let i = 0; i < comments.length; i++) {
        loadComment(comments[i], commentContainer);
    }
    //document.getElementById('allComments').innerHTML = localStorage.getItem('template');
    //localStorage.clear();
};

function loadComment(comment, commentContainer) {
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
    commentText = comment.commentText;

    // set up text box to be appended
    textBox.innerHTML = commentText;

    // append
    wrapDiv.append(userDiv);
    wrapDiv.append(textBox);
    commentContainer.appendChild(wrapDiv);

    br = document.createElement('br');
    commentContainer.appendChild(br);
}

const commentContainer = document.getElementById('allComments');
const pageName = document.title;
console.log(pageName);
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
    userDiv.innerHTML = localStorage.getItem("username");

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

    saveComments(commentText);
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

async function saveComments(commentText) {
    pageTitle = document.querySelector("title");
    username = localStorage.getItem("username");

    comment = new MyComment(username, commentText);
    // call fetch api method to store comment
    const response = await fetch(`api/comments/add`, {
        method: "post",
        body: JSON.stringify({ page: pageName, comment: comment }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response?.status !== 200) {
        console.log(response.msg);
    }

}

class MyComment {
    constructor(username, commentText) {
        this.username = username;
        this.commentText = commentText;
    }
}

//localStorage.clear();