//create a function to make a sound play when we press certain keys 
//add animation to elements when the key is pressed 

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
});

function removeTransition(e) {
    //if the property name is not transform, end the function
    if(e.propertyName != 'transform') return;
    //remove the class "playing" from the letter that you're clicking
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));