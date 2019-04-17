// create function to make a sound play when we press certain keys
// add animcation to the elements when the key is pressed

window.addEventListener('keydown', function(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    console.log(audio);

    if(!audio) return;

    audio.currentTime = 0;

    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    key.classList.add('playing');

});

function removeTransition(e) {

    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));