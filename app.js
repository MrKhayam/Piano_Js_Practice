const pianoButtons = document.querySelectorAll('.pianoButton');
const audioPlay = (audio) => {
    let aud = new Audio(audio);
    return aud.play();
}

    window.addEventListener('keypress', (e) => {
        console.log(e);
        if (e.key === 'a' || e.key === 'A') {
            pianoButtons[0].style.transform = 'scale(0.95)';
            audioPlay('./assets/1.mp3');
        } else if (e.key === 's' || e.key === 'S') {
            pianoButtons[1].style.transform = 'scale(0.95)';
            audioPlay('./assets/2.mp3');
        }else if (e.key === 'd' || e.key === 'D') {
            pianoButtons[2].style.transform = 'scale(0.95)';
            audioPlay('./assets/3.mp3');
        }else if (e.key === 'f' || e.key === 'F') {
            pianoButtons[3].style.transform = 'scale(0.95)';
            audioPlay('./assets/4.mp3');
        }else if (e.key === 'g' || e.key === 'G') {
            pianoButtons[4].style.transform = 'scale(0.95)';
            audioPlay('./assets/5.mp3');
        }else if (e.key === 'h' || e.key === 'H') {
            pianoButtons[5].style.transform = 'scale(0.95)';
            audioPlay('./assets/6.mp3');
        }else if (e.key === 'j' || e.key === 'J') {
            pianoButtons[6].style.transform = 'scale(0.95)';
            audioPlay('./assets/7.mp3');
        }else if (e.key === 'k' || e.key === 'K') {
            pianoButtons[7].style.transform = 'scale(0.95)';
            audioPlay('./assets/10.mp3');
        }else if (e.key === 'l' || e.key === 'L') {
            pianoButtons[8].style.transform = 'scale(0.95)';
            audioPlay('./assets/9.mp3');
        }else if (e.key === 'm' || e.key === 'M') {
            pianoButtons[9].style.transform = 'scale(0.95)';
            audioPlay('./assets/10.mp3');
        }
    })


window.addEventListener('keyup', () => {
    pianoButtons.forEach((i) => {
        i.style.transform = 'scale(1)';
    })
    })