document.body.addEventListener('keydown', (event) => {
    // Obtém o código da tecla pressionada e converte para minúsculas
    const key = event.key.toLowerCase();

    // Verifica se a tecla corresponde a uma das teclas da bateria
    if (key === 'q' || key === 'w' || key === 'e' ||
        key === 'a' || key === 's' || key === 'd' ||
        key === 'z' || key === 'x' || key === 'c') {
        
        // Reproduz o som correspondente
        playSound(`key${key}`);
    }
});

document.querySelector('.composer button').addEventListener('click', () => {    
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement) {
        keyElement.classList.add('active');
    
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }      
}
document.querySelector('.composer button').addEventListener('click', () => {    
    let song = document.querySelector('#input').value;

    // Convertendo todo o texto para minúsculas
    let songLowerCase = song.toLowerCase();

    if(songLowerCase !== '') {
        let songArray = songLowerCase.split('');
        playComposition(songArray);
    }
});

