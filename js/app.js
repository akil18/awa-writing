function postText(collectAreaId, postAreaId) {
    const writtenTextField = document.getElementById(collectAreaId);
    const writtenText = writtenTextField.value;

    writtenTextField.parentNode.removeChild(writtenTextField);

    const postText = document.getElementById(postAreaId);
    postText.innerText = writtenText;
}

document.getElementById('postq-btn').addEventListener('click', function(event){
    event.target.disabled = true;
    event.target.style.backgroundColor = "gray";

    postText('question-area', 'post-question');
})

document.getElementById('start-btn').addEventListener('click', function(event){
    event.target.disabled = true;
    event.target.style.backgroundColor = "gray";

    document.getElementById('answer-area').disabled = false;
    document.getElementById('answer-area').innerText = '';

    const timeOver = setTimeout(postText, 1800000, 'answer-area', 'post-answer');
})

