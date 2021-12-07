async function newFormHandler(event) {
    event.preventDefault();

    const character1 = document.querySelector('#character-one').value;
    const character2 = document.querySelector('#character-two').value;
    const post_body = document.querySelector('#post-body').value;

    const response = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            character1,
            character2,
            post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.make-matchup').addEventListener('submit', newFormHandler);