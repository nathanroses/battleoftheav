
async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-body').value;
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
]; 

console.log(comment_text);

if (comment_text) {
    const response = await fetch('/api/comments', {
        method: 'post',
        body: JSON.stringify({
            post_id,
            comment_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

   

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText)
    }
}
}

document.querySelector('.comment-area').addEventListener('submit', commentFormHandler)