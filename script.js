//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6', 'sound7'];

const buttonsContainer = document.getElementById('buttons');

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => playSound(sound));
  buttonsContainer.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

function playSound(name) {
  stopSounds(); // Stop any currently playing sound
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
  window.currentAudio = audio; // Save reference to stop
}

function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
}
