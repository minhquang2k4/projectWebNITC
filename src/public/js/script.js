// speak 
let voices = [];
if ("speechSynthesis" in window) {
    speechSynthesis.onvoiceschanged = function () {
        voices = speechSynthesis.getVoices();
    }
}
function speak() {
    const text = document.querySelector("#text-to-speech").innerHTML;
    if (voices.length > 0) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voices[2];
        speechSynthesis.speak(utterance);
    } else {
        alert("The list of voices is not available yet");
    }
}

// flip card
document.querySelector('.flip-card-inner').addEventListener('click', function () {
    const current = document.querySelector('.flip-card-inner');
    if (current.classList.contains('flip')) {
        current.classList.remove('flip');
    }
    else
        current.classList.add('flip');
});

// flip card next and back
document.querySelector('.inner-next').addEventListener('click', function () {
    const current = document.querySelector('.flip-card');
    const flipCardInner = document.querySelector('.flip-card-inner');
    current.classList.add('move-next');
    flipCardInner.classList.add('no-transition');
    setTimeout(() => {
        current.classList.remove('move-next');
        flipCardInner.classList.remove('no-transition'); 
    }, 50);
    flipCardInner.classList.remove('flip');
});

document.querySelector('.inner-back').addEventListener('click', function () {
    const current = document.querySelector('.flip-card');
    const flipCardInner = document.querySelector('.flip-card-inner');
    current.classList.add('move-back');
    flipCardInner.classList.add('no-transition');
    setTimeout(() => {
        current.classList.remove('move-back');
        flipCardInner.classList.remove('no-transition');
    }, 50);
    flipCardInner.classList.remove('flip');
});