var audio = document.createElement('audio');
console.log('start')
audio.setAttribute('src' , 'sound.mp3');
audio.loop=true;
audio.play();