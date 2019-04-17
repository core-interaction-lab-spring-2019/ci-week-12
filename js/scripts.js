//create a function to make a sound play when pressed, add animation to the elements
window.addEventListener  ('keydown', function(e) {

const audio = document.querySelector('audio[data-key="$(e.keyCode}"]');

if(!audio) return;

audio.currentTime=0;

audio.play();

const key = document.querySelector('.key[data-key="$(e.keyCode}"]');

key.classList.add('playing');

});

function removeTransition(e) {
    
    if(e.propertyName !='transform')return;

    this.classList.remove ('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend',removeTransition));