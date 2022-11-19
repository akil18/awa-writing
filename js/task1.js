function postText(collectAreaId, postAreaId, wordCountShow = 0) {
    const writtenTextField = document.getElementById(collectAreaId);
    const writtenText = writtenTextField.value;

    if(wordCountShow == 1){
        const wordCountField = document.getElementById('word-count');
        wordCountField.parentNode.style.display = "block";
        const wordCount = writtenText.split(' ').length;
        wordCountField.innerText = wordCount;  
    }

    writtenTextField.parentNode.removeChild(writtenTextField);

    const postText = document.getElementById(postAreaId);
    postText.innerText = writtenText;
}

document.getElementById('start-btn2').addEventListener('click', function(event){
    event.target.disabled = true;
    event.target.style.backgroundColor = "gray";

    document.getElementById('answer-area2').disabled = false;
    document.getElementById('answer-area2').innerText = '';

    const timeOver = setTimeout(postText, 20*60*1000, 'answer-area2', 'post-answer2', 1);

    const clock = document.getElementById('clock2');
    let mins = 0;
    let secs = 0;

    function timeChange(){
        secs+=1;
        if(secs === 60){
            mins += 1;
            secs = 0;
        }

        const minutes = checkTime(mins);
        const seconds = checkTime(secs);

        if(mins === 30 && secs === 1){
            clock.classList.remove('text-white')
            clock.classList.add('text-red-500')
        }
        clock.innerHTML = `${minutes} : ${seconds}`

        setTimeout(timeChange, 1000)
    }

    function checkTime(i){
        if(i < 10){
            i = '0' + i;
        }
        return i;
    }

    timeChange();
})

